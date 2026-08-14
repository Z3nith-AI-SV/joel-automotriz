import { prisma } from '@/lib/db/prisma';
import  Paginacion  from '@/components/componentesCRUD/Paginacion'
import {Cursos} from "@/lib/generated/prisma/client";

const PAGE_SIZE = 10;

export default async function Tabla({
                                                query,
                                                page,
                                            }: {
    query: string;
    page: number;
}) {

    const cursos = await prisma.cursos.findMany({
        where: {titulo: { contains: query, mode: 'insensitive' }},
        skip: Number.isNaN(page)? 0 : (page - 1) * PAGE_SIZE,
        take: PAGE_SIZE,
        orderBy: { cod_curso: 'asc' },
    });

    const total = await prisma.cursos.count({
        where: { titulo: { contains: query, mode: 'insensitive' } },
    });

    return (
        <>
            <div className="overflow-hidden rounded-lg border border-slate-200">
                <table className="w-full text-left text-sm">
                    <thead className="border-b border-slate-200 bg-slate-50">
                    <tr>
                        <th className="px-4 py-3 font-medium text-slate-500">Código</th>
                        <th className="px-4 py-3 font-medium text-slate-500">titulo</th>
                        <th className="px-4 py-3 font-medium text-slate-500">Descripción</th>
                        <th className="px-4 py-3 font-medium text-slate-500">Precio</th>


                    </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                    {cursos.map((u:Cursos) => (
                        <tr key={u.id_curso} className="hover:bg-slate-50">
                            <td className="px-4 py-3 text-slate-500">
                                <span className="absolute inset-y-0 left-0 w-0.5 bg-slate-900 opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
                                {u.cod_curso}
                            </td>
                            <td className="px-4 py-3 text-slate-500">
                                <span className="absolute inset-y-0 left-0 w-0.5 bg-slate-900 opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
                                {u.titulo}
                            </td>
                            <td className="px-4 py-3 text-slate-500">
                                <span className="absolute inset-y-0 left-0 w-0.5 bg-slate-900 opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
                                {u.descripcion}
                            </td>
                            <td className="px-4 py-3 text-slate-500">
                                <span className="absolute inset-y-0 left-0 w-0.5 bg-slate-900 opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
                                {u.precio.toString()}
                            </td>

                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="border-t border-slate-200 px-4 py-3">
                    <Paginacion totalItems={total} pageSize={PAGE_SIZE} currentPage={Number.isNaN(page) ? 1:page }/>
                </div>
            </div>
        </>
    );
}