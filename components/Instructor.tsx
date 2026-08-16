import { Award, CircleCheck } from "lucide-react";
import { YOUTUBE } from "@/lib/youtube";
import { YoutubeIcon } from "./SocialIcons";

const CREDENTIALS = [
  "Egresado de escuela automotriz en El Salvador (1994).",
  "En Estados Unidos desde 1999.",
  "11 certificaciones ASE — 3 de especialidades avanzadas.",
  "2 licencias de emisiones de California (Inspector y Reparación).",
  "Especialista en diagnóstico de fallas complejas.",
  "7 años como instructor.",
  "Se capacita con ingenieros de distintas partes del mundo.",
];

export default function Instructor() {
  return (
    <section id="sobre-joel" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-2 relative">
          <div className="relative aspect-[4/5] rounded-[2rem] glass-strong overflow-hidden">
            <div className="absolute inset-0 card-gradient-1" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center px-6">
                <div className="mx-auto grid h-32 w-32 place-items-center rounded-full glass-strong text-primary text-6xl font-display font-bold">
                  JN
                </div>
                {/* TODO: reemplazar por la foto real de Joel con next/image */}
                <p className="mt-6 text-ink/70 text-sm">[Foto de Joel Navarro pendiente]</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-strong rounded-3xl p-4 flex items-center gap-3 shadow-xl">
              <Award size={28} className="text-primary" aria-hidden="true" />
              <div>
                <div className="font-display text-2xl font-bold text-ink leading-none">11</div>
                <div className="text-xs text-ink/70 mt-1">Certificaciones ASE</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            El instructor
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink">Joel Navarro</h2>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed">
            Técnico salvadoreño radicado en Estados Unidos, con más de 30 años en
            el oficio y una obsesión clara:{" "}
            <strong className="text-ink">
              crear técnicos que hagan diagnósticos que otros no pueden hacer
            </strong>
            .
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {CREDENTIALS.map((c) => (
              <li key={c} className="flex items-start gap-3 glass rounded-2xl p-4">
                <CircleCheck
                  size={18}
                  className="text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-ink/80 leading-snug">{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink/60">
            Las certificaciones ASE son otorgadas por una de las entidades más
            prestigiosas de la industria automotriz.
          </p>
          <a
            href={YOUTUBE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 glass-chip inline-flex items-center gap-3 rounded-full py-2.5 pl-4 pr-5 text-ink hover:brightness-105 transition"
          >
            <YoutubeIcon size={22} />
            <span className="text-sm leading-tight text-left">
              <span className="block font-semibold">
                {YOUTUBE.subscribers} suscriptores en YouTube
              </span>
              <span className="block text-ink/60 text-xs">
                {YOUTUBE.handle} · {YOUTUBE.videoCount} videos
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
