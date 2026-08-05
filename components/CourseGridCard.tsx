import type { CatalogCourse } from "@/lib/catalogo";

/**
 * Card reutilizable del catálogo: imagen, título, descripción y precio.
 */
export default function CourseGridCard({ course }: { course: CatalogCourse }) {
  return (
    <article className="group glass rounded-3xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(46,111,219,0.35)] transition-all duration-300 border-white/60 hover:border-primary/40">
      <div className="relative aspect-[16/9] overflow-hidden">
        {/* TODO: reemplazar por next/image cuando existan las fotos reales */}
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
        <span className="absolute top-3 left-3 glass-chip rounded-full px-3 py-1 text-xs font-semibold text-ink">
          {course.category}
        </span>
      </div>

      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-display font-bold text-base sm:text-lg leading-snug text-ink line-clamp-2">
          {course.title}
        </h3>
        <p className="text-sm text-ink/70 line-clamp-3">{course.description}</p>
        <div className="mt-auto pt-3">
          <span className="font-display text-2xl font-bold text-primary">
            ${course.price}
          </span>
          <span className="ml-1 text-sm text-ink/50">USD</span>
        </div>
      </div>
    </article>
  );
}
