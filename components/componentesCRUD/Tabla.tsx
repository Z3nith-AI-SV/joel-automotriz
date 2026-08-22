
import { prisma } from '@/lib/db/prisma';
import  Paginacion  from '@/components/componentesCRUD/Paginacion'
import TablaClientComponent from "@/components/componentesCRUD/cursos/TablaClientComponent";
import {Cursos} from "@/lib/generated/prisma/client";
import {CursosSerializados} from "@/lib/types/cursosSerializados.types";



const PAGE_SIZE = 10;

export default async function Tabla({query,page }: {query: string; page: number;}) {

    function serializarCurso (curso: Cursos): CursosSerializados
    {
        return{
            ...curso,
            precio: Number(curso.precio)
        }
    }

    const cursos = await prisma.cursos.findMany({
        where: {titulo: { contains: query, mode: 'insensitive' }},
        skip: Number.isNaN(page)? 0 : (page - 1) * PAGE_SIZE,
        take: PAGE_SIZE,
        orderBy: { cod_curso: 'asc' },
    });

    const cursosSerializados = cursos.map(serializarCurso);

    const total = await prisma.cursos.count({
        where: { titulo: { contains: query, mode: 'insensitive' } },
    });

    return (
        <>
            <div className="overflow-hidden rounded-lg border border-slate-200">
                <TablaClientComponent cursos={cursosSerializados}/>
                <div className="border-t border-slate-200 px-4 py-3">
                    <Paginacion totalItems={total} pageSize={PAGE_SIZE} currentPage={Number.isNaN(page) ? 1:page }/>
                </div>
            </div>
        </>
    );
}