import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Course } from "@/lib/courses";
import {Cursos} from "@/lib/generated/prisma/client";

export default function CourseCard({
  course,
  gradient,
}: {
  course: Cursos;
  gradient: number; // 1–4
}) {
  console.log(course.precio)
  return (
    <Link
      href={`/cursos/${course.id_curso}`}
      className="group glass rounded-3xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(46,111,219,0.35)] transition-all duration-300 border-white/60 hover:border-primary/40"
    >
      <div
        className={`relative aspect-[16/9] card-gradient-${gradient} flex items-center justify-center overflow-hidden`}
      >
        <span className="text-6xl sm:text-7xl drop-shadow-sm" aria-hidden="true">
          emoji
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
        <span className="absolute top-3 left-3 glass-chip rounded-full px-3 py-1 text-xs font-semibold text-ink">
          categoria
        </span>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-display font-bold text-base sm:text-lg leading-snug text-ink line-clamp-2 min-h-[3rem]">
          {course.titulo}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-display text-2xl font-bold text-primary">
            ${course.precio.toFixed(2)}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-ink/70 group-hover:text-primary transition">
            Ver curso <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
