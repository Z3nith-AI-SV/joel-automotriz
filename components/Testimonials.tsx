import { Quote } from "lucide-react";

/**
 * ⚠️ CONTENIDO DE MUESTRA — NO SON TESTIMONIOS REALES.
 *
 * Están escritos para llenar el diseño y mostrarle a Joel cómo se ve la sección.
 * Publicar testimonios inventados como si fueran de clientes reales es publicidad
 * engañosa (y Joel vende a EE.UU., donde la FTC lo sanciona). ANTES DE SALIR A
 * PRODUCCIÓN hay que reemplazarlos por reseñas reales con permiso del alumno.
 */
const TESTIMONIALS = [
  {
    quote:
      "Llevaba tres días con una Silverado que se iba a modo seguro cada vez que calentaba. Con el módulo 2 de osciloscopio agarré la señal del sensor de árbol de levas y ahí estaba la caída. Lo que más me sirvió no fue la respuesta, fue ver cómo Joel llega a ella.",
    name: "Óscar Ramírez",
    role: "Taller propio",
    place: "San Salvador, El Salvador",
  },
  {
    quote:
      "Compré el de redes CAN medio desconfiado, porque ya había pagado otros cursos en línea que son puro PowerPoint. Este no. Son carros reales con fallas reales, y cuando se equivoca en cámara lo deja ahí. Eso enseña más que mil diapositivas.",
    name: "Wilmer Cruz",
    role: "Técnico automotriz",
    place: "Houston, TX",
  },
  {
    quote:
      "Tengo 22 años de mecánico y le tenía respeto a los híbridos. Hice los tres módulos y ya trabajo alto voltaje sin sudar frío. El de mantenimiento me lo vi dos veces.",
    name: "José Luis Marroquín",
    role: "Mecánico general",
    place: "Ciudad de Guatemala",
  },
  {
    quote:
      "Lo que me cambió el taller fue entender los fuel trims de verdad. Antes cambiaba sensores por adivinanza y a veces le pegaba. Ahora le explico al cliente qué tiene y por qué, y me creen.",
    name: "Danilo Escobar",
    role: "Diagnóstico automotriz",
    place: "Tegucigalpa, Honduras",
  },
  {
    quote:
      "Le escribí un domingo en la noche pensando que me contestaba el lunes y me respondió en veinte minutos. Con eso me dio la confianza para comprar dos cursos más.",
    name: "Kevin Alvarado",
    role: "Técnico junior",
    place: "Santa Ana, El Salvador",
  },
  {
    quote:
      "El de J2534 me abrió un servicio que antes le mandaba a la agencia. Se pagó solo con la primera programación que hice.",
    name: "Ricardo Peña",
    role: "Taller especializado",
    place: "Ciudad de México",
  },
];

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
          <p className="mt-3 text-ink/70">
            Técnicos que ya aplicaron los cursos en su taller.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="glass rounded-3xl p-6 sm:p-7 flex flex-col"
            >
              <Quote size={28} className="text-primary/50 shrink-0" aria-hidden="true" />
              <p className="mt-4 text-ink/80 leading-relaxed flex-1">
                “{t.quote}”
              </p>
              <footer className="mt-6 pt-4 border-t border-white/50 flex items-center gap-3">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full card-gradient-2 font-display font-bold text-ink"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block font-display font-semibold text-ink leading-tight">
                    {t.name}
                  </span>
                  <span className="block text-sm text-ink/60 leading-tight">
                    {t.role} · {t.place}
                  </span>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
