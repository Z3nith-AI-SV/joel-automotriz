"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CATEGORIES, COURSES } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";
import GlassBlobs from "@/components/GlassBlobs";

export default function CatalogClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("Todas");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COURSES.filter((c) => {
      const matchCat = category === "Todas" || c.category === category;
      const matchQ =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  return (
    <>
      <section className="relative overflow-hidden hero-gradient pt-12 pb-10 sm:pt-16 sm:pb-14">
        <GlassBlobs />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Catálogo
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-ink text-balance max-w-3xl">
            Cursos de diagnóstico automotriz
          </h1>
          <p className="mt-4 text-lg text-ink/70 max-w-2xl">
            34 cursos para llevarte de la teoría al diagnóstico real de fallas
            complejas.
          </p>
          <div className="mt-8 glass-strong rounded-full flex items-center gap-3 px-4 py-2 max-w-2xl">
            <Search size={20} className="text-ink/50 shrink-0" aria-hidden="true" />
            <input
              type="search"
              aria-label="Buscar cursos"
              placeholder="Buscar por nombre, tema, categoría…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 min-w-0 bg-transparent py-2 text-ink placeholder:text-ink/40 focus:outline-none"
            />
          </div>

          {/* Video guía: cómo funcionan y cómo se navegan los cursos */}
          <div className="mt-10 glass-strong rounded-[2rem] p-4 sm:p-5 grid sm:grid-cols-[minmax(0,22rem)_1fr] gap-5 items-center max-w-4xl">
            <div className="aspect-video rounded-2xl overflow-hidden bg-ink">
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                className="w-full h-full"
                src="/intros/como-navegar-los-cursos.mp4"
                poster="/intros/como-navegar-los-cursos.jpg"
                controls
                controlsList="nodownload"
                preload="metadata"
                playsInline
                aria-label="Video: cómo navegar los cursos"
              />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Empieza por aquí
              </span>
              <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold text-ink">
                Cómo navegar los cursos
              </h2>
              <p className="mt-2 text-ink/70 leading-relaxed">
                Joel te explica en video cómo está organizado el contenido, cómo
                recibes el acceso y cómo sacarle el máximo a cada módulo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/50 sticky top-20 z-30 glass-nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-none -mx-1 px-1">
            {["Todas", ...CATEGORIES].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === cat
                    ? "btn-primary text-white shadow-md"
                    : "glass-chip text-ink hover:brightness-105"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-ink/60 mb-6">
            Mostrando <strong className="text-ink">{filtered.length}</strong> de{" "}
            {COURSES.length} cursos
          </p>
          {filtered.length === 0 ? (
            <div className="glass rounded-3xl p-10 text-center text-ink/70">
              No encontramos cursos con ese criterio. Prueba con otra búsqueda o
              categoría.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((course, i) => (
                <CourseCard
                  key={course.slug}
                  course={course}
                  gradient={(i % 4) + 1}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
