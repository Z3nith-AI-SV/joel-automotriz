import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import type { Course } from "@/lib/courses";

export default function CourseCard({
  course,
  gradient,
  priority = false,
}: {
  course: Course;
  gradient: number; // 1–4 — solo se usa como respaldo si el curso no tiene miniatura
  priority?: boolean;
}) {
  return (
    <Link
      href={`/cursos/${course.slug}`}
      className="group glass rounded-3xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(46,111,219,0.35)] transition-all duration-300 border-white/60 hover:border-primary/40"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-pastel-1">
        {course.image ? (
          <Image
            src={course.image}
            alt={`Miniatura del curso ${course.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className={`absolute inset-0 card-gradient-${gradient} grid place-items-center`}
          >
            <span className="text-6xl sm:text-7xl drop-shadow-sm" aria-hidden="true">
              {course.emoji}
            </span>
          </div>
        )}
        {course.introVideo && (
          <>
            {/* Botón de play: anticipa que el curso tiene video de introducción */}
            <span className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white/85 text-primary shadow-lg backdrop-blur-sm">
                <Play size={22} className="ml-0.5 fill-current" aria-hidden="true" />
              </span>
            </span>
            <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-ink/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
              <Play size={10} className="fill-current" aria-hidden="true" /> Vista previa
            </span>
          </>
        )}
        {/* Sutil realce en el borde inferior para separar la imagen del cuerpo */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/60" />
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
          {course.category}
        </span>
        <h3 className="font-display font-bold text-base sm:text-lg leading-snug text-ink line-clamp-2 min-h-[3rem]">
          {course.title}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-display text-2xl font-bold text-primary">
            ${course.price}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-ink/70 group-hover:text-primary transition">
            Ver curso <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
