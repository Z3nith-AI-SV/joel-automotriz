'use server'

import {prisma} from '@/lib/db/prisma'
import {Cursos} from "@/lib/generated/prisma/client";
import {cursoSchemaUpdate} from '@/lib/schemas/curso.schema';
import {z} from 'zod'
import {revalidatePath} from "next/cache";


export async function getCursoPorId(id:string ){
    if(!id || id.trim() == "") throw new Error('ID no válido');

    const curso = prisma.cursos.findUnique({
        where:{id_curso: id}
    });

    if(!curso) throw new Error('Curso no encontrado');

    return curso;
}

export async function updateCurso(curso:Cursos, id: string ){
    const emparejado = cursoSchemaUpdate.safeParse(curso);

    if(!emparejado.success){
        return { success: false, errors: z.flattenError(emparejado.error) };
    }
    //esta declaracion prisma solo actualiza los campos que tira como output
    await prisma.cursos.update({
        where: {id_curso: id},
        data: emparejado.data,
    })
    revalidatePath('/cursosDB');
    return {success: true};
}

export async function createCurso(curso:Cursos)
{
    const emparejado = cursoSchemaUpdate.safeParse(curso);

    const nuevoCurso = await prisma.cursos.create({
        data: emparejado.data
    });

    revalidatePath('/cursosDB');//ruta donde se encuentra la tabla de los cursos
    return {succes:true}
}