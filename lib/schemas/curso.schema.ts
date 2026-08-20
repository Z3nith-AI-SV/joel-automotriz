import {z} from 'zod';

export const cursoSchemaUpdate = z.object({
    titulo: z.string().min(1,'Requerido'),
    url:z.string().min(1,'Requerido'),
    precio:z.coerce.number().positive('Precio debe ser mayor que 0'),
    descripcion:z.string().min(1,'Requerido'),

});

export const cursoSchemaCreate = z.object({
    titulo: z.string().min(1,'Requerido'),
    url:z.string().min(1,'Requerido'),
    precio:z.number().positive('Precio debe ser mayor que 0'),
    descripcion:z.string().min(1,'Requerido'),

});

export type CursoSchema = z.infer<typeof cursoSchemaUpdate>;
export type CursoSchemaCreare = z.infer<typeof cursoSchemaCreate>;