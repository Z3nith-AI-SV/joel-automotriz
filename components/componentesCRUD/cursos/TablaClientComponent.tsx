'use client'

import {useState} from 'react'
import EditCursoModal from './EditCursoModal'
import {Cursos} from "@/lib/generated/prisma/client";
import {CursosSerializados} from "@/lib/types/cursosSerializados.types";

export default function TablaClientComponent({cursos}: { cursos: CursosSerializados[]})
{
    //useState para manear la seleccion de curso
    const[idCurso,setIdCurso] = useState<string|null>(null);
    return (
        <>
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
                {cursos.map((u:CursosSerializados) => (
                    <tr key={u.id_curso} className="hover:bg-slate-50"
                        onClick={() => setIdCurso(u.id_curso)}>
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
                            ${u.precio}
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>
            {idCurso && ( <EditCursoModal id={idCurso} onClose={() =>setIdCurso(null)}/> ) }
        </>
    )
}