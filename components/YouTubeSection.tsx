import Image from "next/image";
import { Play } from "lucide-react";
import { FEATURED_VIDEOS, YOUTUBE, watchUrl } from "@/lib/youtube";
import { YoutubeIcon } from "./SocialIcons";

export default function YouTubeSection() {
  return (
    <section className="relative py-20 sm:py-28 pastel-gradient overflow-hidden">
      <div
        className="blob card-gradient-3"
        style={{ width: 480, height: 480, bottom: -160, left: -120 }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              YouTube
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink">
              Aprende también en el canal
            </h2>
            <p className="mt-4 text-lg text-ink/70 leading-relaxed">
              Joel publica diagnósticos reales cada semana: casos de taller,
              clases en vivo y análisis con osciloscopio. Míralo trabajar antes
              de decidirte por un curso.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={YOUTUBE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary-hover inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold"
              >
                <YoutubeIcon size={20} /> Suscribirme al canal
              </a>
              <div className="glass-chip flex items-center gap-3 rounded-full py-2 pl-2 pr-5">
                <Image
                  src="/brand/joel-avatar.jpg"
                  alt="Foto de perfil del canal de Joel"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="text-sm leading-tight">
                  <span className="block font-display font-bold text-ink">
                    {YOUTUBE.subscribers} suscriptores
                  </span>
                  <span className="block text-ink/60 text-xs">
                    {YOUTUBE.videoCount} videos publicados
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURED_VIDEOS.map((v) => (
            <a
              key={v.id}
              href={watchUrl(v.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-3xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(46,111,219,0.35)] transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-ink/5">
                <Image
                  src={v.thumb}
                  alt={`Miniatura del video: ${v.title}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white/85 text-primary shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Play size={22} className="ml-0.5 fill-current" aria-hidden="true" />
                  </span>
                </span>
                <span className="absolute bottom-2 right-2 rounded-md bg-ink/85 px-1.5 py-0.5 text-[11px] font-semibold text-white tabular-nums">
                  {v.duration}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-ink leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {v.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
