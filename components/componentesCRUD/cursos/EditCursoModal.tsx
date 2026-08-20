'use client'

import {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {cursoSchemaUpdate, CursoSchema} from "@/lib/schemas/curso.schema";
import {getCursoPorId,updateCurso} from "@/lib/actions/cursos";
import {Cursos} from "@/lib/generated/prisma/client";
import {Decimal} from "@prisma/client/runtime/client";

export default function EditCursoModal({id,onClose}:{id:string; onClose:()=>void}) {
const [cargando,setCargando] = useState(true);
const [serverError, setServerError] = useState<string | null>(null);

const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting}
} = useForm<CursoSchema>({
    resolver: zodResolver(cursoSchemaUpdate)
});

useEffect(() => {
    let activo = true;
    setCargando(true);

    getCursoPorId(id)
        .then((curso) => {
            if(!activo) return;
            reset({
                titulo: curso!.titulo,
                descripcion: curso!.descripcion ?? '',
                precio: Number(curso!.precio),
                url: curso!.url ?? '',
            })
        })
        .catch((err) => setServerError(err))
        .finally(() => activo && setCargando(false));

    return() => {
        activo = false;
    };

},[id,reset]);

const onSubmit = async (data: CursoSchema) => {

    setServerError(null);
    var curso_parsed:Cursos = {
        titulo : data.titulo,
        descripcion: data.descripcion,
        precio: Decimal(data.precio),
        url: data.url,
        id_curso:"",
        cod_curso: BigInt(0)
    }


    const res = await updateCurso(curso_parsed,id);
    if(!res.success){
        setServerError('Revisar campos');
        return;
    }
    onClose();
};

return(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Editar curso</h2>
                <button
                    onClick={onClose}
                    className="text-slate-400 transition-colors hover:text-slate-600"
                    aria-label="Cerrar"
                >
                    ✕
                </button>
            </div>

            {cargando ? (
                <div className="space-y-3 py-4">
                    <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                    <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
                    <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200" />
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Título</label>
                        <input
                            {...register('titulo')}
                            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                        />
                        {errors.titulo && <p className="mt-1 text-sm text-red-600">{errors.titulo.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700">Descripción</label>
                        <textarea
                            {...register('descripcion')}
                            rows={3}
                            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700">Precio</label>
                        <input
                            type="number"
                            step="0.01"
                            {...register('precio')}
                            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                        />
                        {errors.precio && <p className="mt-1 text-sm text-red-600">{errors.precio.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700">URL</label>
                        <input
                            {...register('url')}
                            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                        />
                        {errors.url && <p className="mt-1 text-sm text-red-600">{errors.url.message}</p>}
                    </div>

                    {serverError && <p className="text-sm text-red-600">{serverError}</p>}

                    <div className="flex justify-end gap-2 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 disabled:opacity-50"
                        >
                            {isSubmitting ? 'Guardando...' : 'Guardar cambios'}
                        </button>
                    </div>
                </form>
            )}
        </div>
    </div>
);

}