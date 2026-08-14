'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function Paginacion({
                                       totalItems,
                                       pageSize,
                                       currentPage,
                                   }: {
    totalItems: number;
    pageSize: number;
    currentPage: number;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const totalPages = Math.ceil(totalItems / pageSize);

    const goToPage = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        router.push(`${pathname}?${params.toString()}`);
    };
    const baseBtn =
        'rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent';
    return (
        <div className="flex items-center justify-between">
           <span className="text-sm text-slate-500">
                Página <span className="font-medium text-slate-700">{currentPage}</span> de{' '}
               <span className="font-medium text-slate-700">{totalPages}</span>
            </span>
            <div className="flex gap-2">
                <button disabled={currentPage <= 1} onClick={() => goToPage(currentPage - 1)} className={baseBtn}>
                    Anterior
                </button>
                <button disabled={currentPage >= totalPages} onClick={() => goToPage(currentPage + 1)} className={baseBtn}>
                    Siguiente
                </button>
            </div>
        </div>
    );
}