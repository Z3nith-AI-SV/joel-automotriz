import {Cursos} from '@/lib/generated/prisma/client'

export type  CursosSerializados = Omit<Cursos,'precio'> & {
    precio: number
};