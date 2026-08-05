import { Search } from "lucide-react";

/**
 * Barra de búsqueda presentacional — sin funcionalidad de filtrado.
 * TODO: conectar onChange/valor cuando se defina la búsqueda del catálogo.
 */
export default function SearchBar({
  placeholder = "Buscar…",
  label = "Buscar",
  className = "",
}: {
  placeholder?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`glass-strong rounded-full flex items-center gap-3 px-4 py-2 ${className}`}
    >
      <Search size={20} className="text-ink/50 shrink-0" aria-hidden="true" />
      <input
        type="search"
        aria-label={label}
        placeholder={placeholder}
        className="flex-1 min-w-0 bg-transparent py-2 text-ink placeholder:text-ink/40 focus:outline-none"
      />
    </div>
  );
}
