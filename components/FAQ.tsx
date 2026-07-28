"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SITE } from "@/lib/site";

const FAQS = [
  {
    q: "¿Cómo recibo mi curso después de pagar?",
    a: "El sistema te envía automáticamente a tu correo el enlace de acceso en Google Drive, al instante y a cualquier hora.",
  },
  {
    q: "¿Qué necesito para acceder?",
    a: "El correo que uses en la compra debe estar asociado a una cuenta de Google, y debes tener la sesión de Google iniciada en tu equipo antes de abrir el enlace. Si tu correo (Hotmail, Yahoo, etc.) está vinculado a Google, también funciona.",
  },
  {
    q: "No puedo entrar a mi curso, ¿qué hago?",
    a: `Verifica que estás en la sesión de Google del correo con el que compraste. Si el problema sigue, escribe a ${SITE.supportEmail} con tu correo de compra y te habilitamos el acceso.`,
  },
  {
    q: "¿Puedo compartir mi curso?",
    a: "No. El acceso está ligado a tu cuenta de Google y es personal. Compartirlo implica exponer tu propia cuenta y puede bloquear tu acceso.",
  },
  {
    q: "¿El acceso caduca?",
    // TODO: PENDIENTE DEFINIR CON EL CLIENTE — texto provisional
    a: "Tu acceso es permanente: pagas una vez y el curso es tuyo.",
  },
  {
    q: "¿Cómo es la metodología?",
    a: "Tres pasos: (1) teoría clara del sistema y su operación; (2) demostraciones en autos en buen estado para tener un punto de comparación de datos correctos; (3) diagnóstico real de fallas en autos con problemas verdaderos. 95% en video, el resto PDFs de apoyo.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "PayPal y tarjeta de crédito o débito internacional, en dólares. Si no cuentas con ninguna, escríbenos y buscamos una alternativa.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 pastel-gradient">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Preguntas frecuentes
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink">
            Todo lo que necesitas saber antes de comprar
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {FAQS.map(({ q, a }, i) => {
            const open = openIndex === i;
            return (
              <div key={q} className="glass-strong rounded-2xl overflow-hidden">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                >
                  <span className="font-display font-semibold text-ink text-base sm:text-lg">
                    {q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-primary transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-ink/75 leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
