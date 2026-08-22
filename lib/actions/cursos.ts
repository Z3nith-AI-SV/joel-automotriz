'use server'

import {randomUUID} from 'node:crypto';
import {mkdir, unlink, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {prisma} from '@/lib/db/prisma'
import {
    CursoSchema,
    CursoSchemaCreate,
    cursoSchemaCreate,
    cursoSchemaUpdate,
    EXTENSION_POR_TIPO,
    TipoImagenPermitido,
} from '@/lib/schemas/curso.schema';
import {z} from 'zod'
import {revalidatePath} from "next/cache";
import {CursosSerializados} from "@/lib/types/cursosSerializados.types";

const DIRECTORIO_IMAGENES = path.join(process.cwd(), 'public', 'images', 'cursos');

type ErroresPorCampo = Record<string, string[] | undefined>;

function fallo(mensaje: string, errors?: ErroresPorCampo) {
    return {success: false as const, mensaje, errors};
}

function exito() {
    return {success: true as const};
}

//guarda el archivo con un UUID como nombre y devuelve ese nombre para la bd
async function guardarImagen(imagen: File) {
    const extension = EXTENSION_POR_TIPO[imagen.type as TipoImagenPermitido];
    if (!extension) throw new Error('Formato de imagen no permitido');

    //el nombre original se descarta a proposito
    const nombreArchivo = `${randomUUID()}${extension}`;
    const contenido = Buffer.from(await imagen.arrayBuffer());

    await mkdir(DIRECTORIO_IMAGENES, {recursive: true});
    await writeFile(path.join(DIRECTORIO_IMAGENES, nombreArchivo), contenido);

    return nombreArchivo;
}

async function borrarImagen(nombreArchivo: string) {
    //solo se borran nombres planos generados por nosotros, nunca rutas
    if (!nombreArchivo || nombreArchivo !== path.basename(nombreArchivo)) return;

    await unlink(path.join(DIRECTORIO_IMAGENES, nombreArchivo)).catch(() => {});
}

function revalidarCursos() {
    revalidatePath('/AdmCursos');//ruta donde se encuentra la tabla de los cursos
    revalidatePath('/cursosdb');
}

export async function getCursoPorId(id: string): Promise<CursosSerializados> {
    if (!id || id.trim() == "") throw new Error('ID no válido');

    const curso = await prisma.cursos.findUnique({
        where: {id_curso: id}
    });

    if (!curso) throw new Error('Curso no encontrado');

    return {
        ...curso,
        precio: Number(curso.precio)
    };
}

export async function updateCurso(curso: CursoSchema, id: string) {
    if (!id || id.trim() == "") return fallo('ID no válido');

    const emparejado = cursoSchemaUpdate.safeParse(curso);

    if (!emparejado.success) {
        return fallo('Revisar campos', z.flattenError(emparejado.error).fieldErrors);
    }

    //la imagen no es columna directa: se procesa aparte del resto de los campos
    const {imagen, ...datos} = emparejado.data;

    const actual = await prisma.cursos.findUnique({
        where: {id_curso: id},
        select: {imagen_miniatura: true},
    });

    if (!actual) return fallo('Curso no encontrado');

    const nuevaImagen = imagen ? await guardarImagen(imagen) : null;

    try {
        //esta declaracion prisma solo actualiza los campos que tira como output
        await prisma.cursos.update({
            where: {id_curso: id},
            data: nuevaImagen ? {...datos, imagen_miniatura: nuevaImagen} : datos,
        })
    } catch (error) {
        if (nuevaImagen) await borrarImagen(nuevaImagen);
        throw error;
    }

    //recien con el update confirmado se descarta la imagen anterior
    if (nuevaImagen && actual.imagen_miniatura) await borrarImagen(actual.imagen_miniatura);

    revalidarCursos();
    return exito();
}

export async function createCurso(curso: CursoSchemaCreate) {
    const emparejado = cursoSchemaCreate.safeParse(curso);

    if (!emparejado.success) {
        return fallo('Revisar campos', z.flattenError(emparejado.error).fieldErrors);
    }

    const {imagen, ...datos} = emparejado.data;
    const nombreImagen = await guardarImagen(imagen);

    try {
        await prisma.cursos.create({
            data: {...datos, imagen_miniatura: nombreImagen}
        });
    } catch (error) {
        //si no se llego a insertar el registro la imagen quedaria huerfana
        await borrarImagen(nombreImagen);
        throw error;
    }

    revalidarCursos();
    return exito();
}
