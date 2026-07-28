import { BookOpen, Car, Wrench } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: BookOpen,
    title: "Teoría clara",
    text: "Descripción y operación de cada sistema. Antes de tocar un carro, entiendes qué hace, cómo lo hace y por qué.",
  },
  {
    num: "02",
    icon: Car,
    title: "Demostraciones en autos sanos",
    text: "Vemos primero los datos correctos en vehículos en buen estado. Sin ese punto de comparación, no hay diagnóstico serio.",
  },
  {
    num: "03",
    icon: Wrench,
    title: "Diagnóstico real",
    text: "Fallas reales en autos con problemas de verdad — no averías creadas para la cámara. 95% video, el resto PDFs de apoyo.",
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="relative py-20 sm:py-28 pastel-gradient overflow-hidden">
      <div
        className="blob card-gradient-2"
        style={{ width: 500, height: 500, top: -180, right: -160 }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Metodología
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink">
            Así aprendes con Joel
          </h2>
          <p className="mt-3 text-ink/70">
            Un proceso en tres pasos diseñado para que no memorices, sino que
            entiendas de verdad qué está pasando dentro del vehículo.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {STEPS.map(({ num, icon: Icon, title, text }) => (
            <div key={num} className="glass-strong rounded-3xl p-6 sm:p-8 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-bold text-primary/30">{num}</span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/70 text-primary">
                  <Icon size={22} aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-3 text-ink/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
