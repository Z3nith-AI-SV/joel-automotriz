'use client'

import {useState} from 'react'
import {Plus} from 'lucide-react'
import CreateCursoModal from '@/components/componentesCRUD/cursos/CreateCursoModal'

export default function BotonNuevoCurso() {
    const [abierto, setAbierto] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setAbierto(true)}
                className="flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
            >
                <Plus className="h-4 w-4"/>
                Agregar curso
            </button>

            {abierto && <CreateCursoModal onClose={() => setAbierto(false)}/>}
        </>
    );
}
