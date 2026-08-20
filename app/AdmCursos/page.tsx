//esta sera la page con la tabla para administrar los cursos
import { Suspense } from 'react';
import BarraBusqueda from '@/components/componentesCRUD/BarraBusqueda';
import Tabla from '@/components/componentesCRUD/Tabla';
import {Plus} from 'lucide-react'

export default async function UsuariosPage({
                                               searchParams,
                                           }: {
    searchParams: Promise<{ q?: string; page?: string }>;
}) {
    const { q, page } = await searchParams;

    return (
        <div className="mx-auto max-w-4xl px-6 py-10">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-xl font-semibold text-slate-900">Cursos</h1>
                <BarraBusqueda />
            </div>
            <Suspense key={`${q}-${page}`} >
                <Tabla query={q ?? ''} page={Number(page) ?? 1} />
            </Suspense>
            <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white px-6 py-4">
                <div className="mx-auto flex max-w-4xl justify-end gap-2">
                    <button className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                        Cancelar
                    </button>
                    <button className="flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800">
                        <Plus className="h-4 w-4"/>
                        Agregar curso
                    </button>
                </div>
            </div>
        </div>
    );
}