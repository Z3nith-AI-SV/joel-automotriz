/**
 * Chip de categoría presentacional — sin funcionalidad de filtrado.
 * `active` solo controla el estilo; TODO: conectar al estado del catálogo.
 */
export default function CategoryChip({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <span
      className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition select-none ${
        active
          ? "btn-primary text-white shadow-md"
          : "glass-chip text-ink hover:brightness-105"
      }`}
    >
      {label}
    </span>
  );
}
