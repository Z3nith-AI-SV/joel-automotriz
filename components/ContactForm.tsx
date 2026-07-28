"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { SITE } from "@/lib/site";

export default function ContactForm() {
  const [sending, setSending] = useState(false);

  // TODO: conectar a un webhook/backend real (n8n) cuando esté definido.
  // Mientras tanto abre el correo del cliente con los datos prellenados.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `[Web] ${data.get("tipo")} — ${data.get("nombre")}`
    );
    const body = encodeURIComponent(
      `Nombre: ${data.get("nombre")}\nCorreo: ${data.get("correo")}\nTipo: ${data.get("tipo")}\n\n${data.get("mensaje")}`
    );
    window.location.href = `mailto:${SITE.supportEmail}?subject=${subject}&body=${body}`;
    setSending(false);
  };

  return (
    <section id="contacto" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Contacto
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink">
            ¿Tienes una consulta?
          </h2>
          <p className="mt-3 text-ink/70">
            Escríbenos y te responderemos por correo. Respuestas típicas en 24–48
            horas.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-10 glass-strong rounded-3xl p-6 sm:p-8 space-y-5"
        >
          <div>
            <label htmlFor="nombre" className="block text-sm font-semibold text-ink mb-2">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              required
              placeholder="Tu nombre"
              className="w-full rounded-xl bg-white/80 border border-white/60 px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label htmlFor="correo" className="block text-sm font-semibold text-ink mb-2">
              Correo
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              required
              placeholder="tu@correo.com"
              className="w-full rounded-xl bg-white/80 border border-white/60 px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label htmlFor="tipo" className="block text-sm font-semibold text-ink mb-2">
              Tipo de consulta
            </label>
            <select
              id="tipo"
              name="tipo"
              required
              defaultValue=""
              className="w-full rounded-xl bg-white/80 border border-white/60 px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option>Quiero comprar un curso</option>
              <option>Problema con mi acceso</option>
              <option>Otro</option>
            </select>
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-semibold text-ink mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              required
              placeholder="Cuéntanos en qué podemos ayudarte…"
              className="w-full rounded-xl bg-white/80 border border-white/60 px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="btn-primary btn-primary-hover w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold disabled:opacity-70"
          >
            Enviar consulta <Send size={16} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}
