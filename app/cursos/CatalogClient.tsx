"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CATEGORIES, COURSES } from "@/lib/courses";

import CourseCard from "@/components/CourseCard";
import GlassBlobs from "@/components/GlassBlobs";
import {Cursos} from "@/lib/generated/prisma/client";

export default  function CatalogClient({cursos}: {cursos: Cursos[]}) {
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
        </div>
      </section>

      <section className="relative border-t border-white/50 sticky top-16 z-30 glass-nav">
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
              {cursos.map((course, i) => (
                <CourseCard
                  key={course.id_curso}
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
