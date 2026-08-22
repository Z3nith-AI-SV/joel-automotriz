'use client'

import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {
    cursoSchemaCreate,
    CursoSchemaCreate,
    CursoCreateInput,
} from "@/lib/schemas/curso.schema";
import {createCurso} from "@/lib/actions/cursos";
import CampoImagen from "@/components/componentesCRUD/cursos/CampoImagen";

export default function CreateCursoModal({onClose}: { onClose: () => void }) {
const [serverError, setServerError] = useState<string | null>(null);

const {
    register,
    handleSubmit,
    watch,
    formState: {errors, isSubmitting}
} = useForm<CursoCreateInput, unknown, CursoSchemaCreate>({
    resolver: zodResolver(cursoSchemaCreate),
    defaultValues: {
        titulo: '',
        descripcion: '',
        url: '',
        precio: '',
    }
});

const imagenSeleccionada = watch('imagen');

const onSubmit = async (data: CursoSchemaCreate) => {

    setServerError(null);

    const res = await createCurso(data);
    if(!res.success){
        setServerError(res.mensaje);
        return;
    }
    onClose();
};

return(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Nuevo curso</h2>
                <button
                    onClick={onClose}
                    className="text-slate-400 transition-colors hover:text-slate-600"
                    aria-label="Cerrar"
                >
                    ✕
                </button>
            </div>

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
                    {errors.descripcion && <p className="mt-1 text-sm text-red-600">{errors.descripcion.message}</p>}
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

                <CampoImagen
                    registro={register('imagen')}
                    seleccion={imagenSeleccionada}
                    error={errors.imagen?.message}
                />

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
                        {isSubmitting ? 'Guardando...' : 'Crear curso'}
                    </button>
                </div>
            </form>
        </div>
    </div>
);

}
