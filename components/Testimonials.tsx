import { Quote } from "lucide-react";

// TODO: reemplazar con testimonios reales cuando Joel los entregue
const TESTIMONIALS = [1, 2, 3];

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Testimonios
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink">
            Lo que dicen los estudiantes
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((i) => (
            <blockquote key={i} className="glass rounded-3xl p-6 sm:p-7 flex flex-col">
              <Quote size={28} className="text-primary/50" aria-hidden="true" />
              <p className="mt-4 text-ink/80 leading-relaxed flex-1">
                [Texto de testimonio real por añadir cuando el cliente lo entregue.]
              </p>
              <footer className="mt-6 pt-4 border-t border-white/50">
                <div className="font-display font-semibold text-ink">
                  [TESTIMONIO PENDIENTE]
                </div>
                <div className="text-sm text-ink/60">[País]</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
