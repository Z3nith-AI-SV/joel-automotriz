'use client'

import {useEffect, useState} from 'react'
import type {UseFormRegisterReturn} from 'react-hook-form'
import {ACCEPT_IMAGENES, MAX_IMAGEN_BYTES} from '@/lib/schemas/curso.schema'

//el input file entrega un FileList, pero watch() puede devolver ya el File parseado
function primerArchivo(valor: unknown): File | null {
    if (typeof File !== 'undefined' && valor instanceof File) return valor;
    if (typeof FileList !== 'undefined' && valor instanceof FileList) return valor.item(0);
    return null;
}

export default function CampoImagen({
                                        registro,
                                        seleccion,
                                        imagenActual,
                                        error,
                                        etiqueta = 'Imagen',
                                        ayuda,
                                    }: {
    registro: UseFormRegisterReturn;
    seleccion: unknown;
    imagenActual?: string | null;
    error?: string;
    etiqueta?: string;
    ayuda?: string;
}) {
    const archivo = primerArchivo(seleccion);
    const [previa, setPrevia] = useState<string | null>(null);

    useEffect(() => {
        if (!archivo) {
            setPrevia(null);
            return;
        }

        const url = URL.createObjectURL(archivo);
        setPrevia(url);

        return () => URL.revokeObjectURL(url);
    }, [archivo]);

    const vistaPrevia = previa ?? imagenActual ?? null;

    return (
        <div>
            <label className="block text-sm font-medium text-slate-700">{etiqueta}</label>

            <div className="mt-1 flex items-start gap-3">
                {vistaPrevia ? (
                    <img
                        src={vistaPrevia}
                        alt="Vista previa del curso"
                        className="h-20 w-20 shrink-0 rounded-md border border-slate-200 object-cover"
                    />
                ) : (
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md border border-dashed border-slate-300 text-xs text-slate-400">
                        Sin imagen
                    </div>
                )}

                <div className="min-w-0 flex-1">
                    <input
                        type="file"
                        accept={ACCEPT_IMAGENES}
                        {...registro}
                        className="w-full text-sm text-slate-600 file:mr-3 file:rounded-md file:border-0 file:bg-slate-900 file:px-3 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-slate-800"
                    />
                    <p className="mt-1 text-xs text-slate-500">
                        {ayuda ?? `JPG, PNG, WEBP o AVIF. Máximo ${MAX_IMAGEN_BYTES / (1024 * 1024)} MB.`}
                    </p>
                    {archivo && (
                        <p className="mt-1 truncate text-xs text-slate-400">
                            Se guardará como un UUID, no como «{archivo.name}»
                        </p>
                    )}
                </div>
            </div>

            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
}
