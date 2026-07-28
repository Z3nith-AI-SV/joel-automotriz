import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COURSES } from "@/lib/courses";
import CourseCard from "./CourseCard";

const FEATURED_SLUGS = [
  "red-can-topologia-diagnostico",
  "osciloscopio-1-basico-escalas",
  "escaner-modulo-1-pids-graficas",
  "hibridos-2-alto-voltaje",
  "fuel-trims-mezcla-pobre-rica",
  "autos-no-prenden-1",
];

export default function FeaturedCourses() {
  const featured = FEATURED_SLUGS.map(
    (slug) => COURSES.find((c) => c.slug === slug)!
  ).filter(Boolean);

  return (
    <section className="relative py-20 sm:py-28" id="cursos-destacados">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Catálogo
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink">
              Cursos destacados
            </h2>
            <p className="mt-3 text-ink/70">
              Una muestra del catálogo. Cada curso incluye teoría, demostraciones
              en autos sanos y diagnóstico real de fallas.
            </p>
          </div>
          <Link
            href="/cursos"
            className="inline-flex items-center gap-2 rounded-full glass-strong px-5 py-2.5 text-sm font-semibold text-ink hover:brightness-105 transition"
          >
            Ver todos los cursos <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((course, i) => (
            <CourseCard key={course.slug} course={course} gradient={(i % 4) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
