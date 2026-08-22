import {z} from 'zod';

//carpeta publica donde terminan las imagenes de los cursos
export const RUTA_PUBLICA_IMAGENES = '/images/cursos';

export const MAX_IMAGEN_BYTES = 5 * 1024 * 1024;

//la extension se saca del tipo MIME, nunca del nombre que manda el navegador
export const EXTENSION_POR_TIPO = {
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/webp': '.webp',
    'image/avif': '.avif',
} as const;

export type TipoImagenPermitido = keyof typeof EXTENSION_POR_TIPO;

export const TIPOS_IMAGEN_PERMITIDOS = Object.keys(EXTENSION_POR_TIPO) as TipoImagenPermitido[];
export const ACCEPT_IMAGENES = TIPOS_IMAGEN_PERMITIDOS.join(',');

//devuelve la ruta que se usa en el <img> a partir del nombre guardado en la bd
export function urlImagenCurso(nombreArchivo?: string | null) {
    return nombreArchivo ? `${RUTA_PUBLICA_IMAGENES}/${nombreArchivo}` : null;
}

//el input file entrega un FileList, la server action recibe el File directo
const normalizarArchivo = (valor: unknown) => {
    if (typeof FileList !== 'undefined' && valor instanceof FileList) return valor.item(0) ?? undefined;
    if (Array.isArray(valor)) return valor[0] ?? undefined;
    if (valor === null || valor === '') return undefined;
    return valor;
};

const archivoImagen = z
    .custom<File>((valor) => typeof File !== 'undefined' && valor instanceof File, 'Requerido')
    .refine((archivo) => archivo.size > 0, 'El archivo está vacío')
    .refine(
        (archivo) => archivo.size <= MAX_IMAGEN_BYTES,
        `La imagen no debe superar ${MAX_IMAGEN_BYTES / (1024 * 1024)} MB`,
    )
    .refine(
        (archivo) => TIPOS_IMAGEN_PERMITIDOS.includes(archivo.type as TipoImagenPermitido),
        'Formato no permitido: use JPG, PNG, WEBP o AVIF',
    );

const cursoBase = z.object({
    titulo: z.string().min(1, 'Requerido'),
    url: z.string().min(1, 'Requerido'),
    precio: z.coerce.number().positive('Precio debe ser mayor que 0'),
    descripcion: z.string().min(1, 'Requerido'),
});

//al editar la imagen es opcional: si no se elige otra se conserva la actual
export const cursoSchemaUpdate = cursoBase.extend({
    imagen: z.preprocess(normalizarArchivo, archivoImagen.optional()),
});

//al crear la imagen es obligatoria
export const cursoSchemaCreate = cursoBase.extend({
    imagen: z.preprocess(normalizarArchivo, archivoImagen),
});

//los formularios trabajan con el input (lo que escribe el usuario) y entregan el output ya parseado
export type CursoUpdateInput = z.input<typeof cursoSchemaUpdate>;
export type CursoCreateInput = z.input<typeof cursoSchemaCreate>;

export type CursoSchema = z.output<typeof cursoSchemaUpdate>;
export type CursoSchemaCreate = z.output<typeof cursoSchemaCreate>;
