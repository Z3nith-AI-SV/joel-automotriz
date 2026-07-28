import { SITE } from "@/lib/site";
import { YoutubeIcon } from "./SocialIcons";

export default function YouTubeSection() {
  return (
    <section className="relative py-20 sm:py-28 pastel-gradient overflow-hidden">
      <div
        className="blob card-gradient-3"
        style={{ width: 480, height: 480, bottom: -160, left: -120 }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            YouTube
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink">
            Aprende también en el canal
          </h2>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed">
            Cientos de miles de mecánicos hispanohablantes ya siguen a Joel en
            YouTube. Diagnósticos reales, explicaciones claras y casos que
            difícilmente encuentras en otro lado.
          </p>
          <a
            href={SITE.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 btn-primary btn-primary-hover inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold"
          >
            <YoutubeIcon size={20} /> Ver canal en YouTube
          </a>
        </div>
        <div className="glass-strong rounded-[2rem] p-3 sm:p-4">
          <div className="aspect-video rounded-2xl overflow-hidden bg-ink/5">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed?listType=user_uploads&list=UCSi1HNth5US2-lJlwEZpgeA"
              title="Canal de Joel Automotive in Action"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
