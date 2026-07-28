import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] glass-strong p-8 sm:p-14 text-center">
          <div
            className="blob card-gradient-1"
            style={{ width: 300, height: 300, top: -100, left: -80 }}
            aria-hidden="true"
          />
          <div
            className="blob card-gradient-4"
            style={{ width: 300, height: 300, bottom: -100, right: -80, opacity: 0.4 }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink text-balance max-w-2xl mx-auto">
              El próximo diagnóstico difícil ya no tiene por qué ganarte.
            </h2>
            <p className="mt-4 text-ink/70 max-w-xl mx-auto">
              Explora los 34 cursos y elige el que te toca ahora. Pagas una vez y
              el conocimiento es tuyo.
            </p>
            <Link
              href="/cursos"
              className="mt-8 btn-primary btn-primary-hover inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold"
            >
              Ver catálogo completo <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
