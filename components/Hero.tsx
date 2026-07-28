import Link from "next/link";
import { ArrowRight, Award, Clock, GraduationCap, Wrench } from "lucide-react";
import GlassBlobs from "./GlassBlobs";

const STATS = [
  { icon: GraduationCap, label: "34 cursos" },
  { icon: Award, label: "11 certificaciones ASE" },
  { icon: Wrench, label: "+30 años de experiencia" },
  { icon: Clock, label: "7 años como instructor" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient">
      <GlassBlobs />
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 sm:pt-24 sm:pb-32 lg:px-8">
        <div className="max-w-3xl">
          <span className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Diagnóstico automotriz real
          </span>
          <h1 className="mt-6 text-balance text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-ink">
            Aprende a diagnosticar lo que{" "}
            <span className="text-primary">otros no pueden</span>.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink/70 max-w-2xl">
            <em>
              &quot;Si haces lo mismo de siempre, ¿cómo puedes esperar resultados
              diferentes?&quot;
            </em>
            <span className="block mt-2 text-sm text-ink/60">
              — Joel Navarro, 11 certificaciones ASE
            </span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/cursos"
              className="btn-primary btn-primary-hover inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold"
            >
              Explorar los 34 cursos
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href="#metodologia"
              className="glass-strong inline-flex items-center rounded-full px-6 py-3.5 text-base font-semibold text-ink hover:brightness-105 transition"
            >
              Ver metodología
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {STATS.map(({ icon: Icon, label }) => (
            <div key={label} className="glass rounded-3xl p-4 sm:p-5 flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/70 text-primary">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span className="min-w-0 font-display font-semibold text-sm sm:text-base text-ink leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
