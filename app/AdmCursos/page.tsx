//esta sera la page con la tabla para administrar los cursos
import { Suspense } from 'react';
import BarraBusqueda from '@/components/componentesCRUD/BarraBusqueda';
import Tabla from '@/components/componentesCRUD/Tabla';

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
        </div>
    );
}