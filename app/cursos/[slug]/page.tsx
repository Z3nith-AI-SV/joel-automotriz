import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CircleCheck, CirclePlay, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { COURSES, getCourse } from "@/lib/courses";
import { SITE } from "@/lib/site";
import {Cursos} from "@/lib/generated/prisma/client";
import {prisma} from "@/lib/db/prisma";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      url: `/cursos/${course.slug}`,
    },
  };
}

const LEARN_POINTS = [
  "Teoría clara: descripción y operación del sistema.",
  "Demostraciones en autos en buen estado para tener el punto de comparación.",
  "Diagnóstico real de fallas verdaderas — no averías creadas para la cámara.",
  "95% en video, el resto en PDFs de apoyo.",
];

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await prisma.cursos.findUnique({
    where: {id_curso: slug},
  });
  if (!course) notFound();

  const index = COURSES.findIndex((c) => c.slug === slug);
  //const related = COURSES.filter(
//    (c) => c.category === course.category && c.slug !== course.slug
//  ).slice(0, 3);

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.titulo,
    description: course.descripcion,
    provider: {
      "@type": "Organization",
      name: "Joel Automotriz en Acción",
      sameAs: SITE.youtube,
    },
    offers: {
      "@type": "Offer",
      price: course.precio,
      priceCurrency: "USD",
      category: 0,
    },
    inLanguage: "es",
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <main>
        <section className="relative overflow-hidden hero-gradient pt-8 pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/cursos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 hover:text-primary"
            >
              <ArrowLeft size={16} aria-hidden="true" /> Volver al catálogo
            </Link>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="glass-chip inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-ink">
                  <span>emoji</span> categoria
                </span>
                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink text-balance leading-[1.1]">
                  {course.titulo}
                </h1>
                <p className="mt-5 text-lg text-ink/70 leading-relaxed">
                  {course.descripcion}
                </p>
              </div>

              {/* Video de introducción */}
              <div className="glass-strong rounded-[2rem] p-3 sm:p-4">
                {/*video de introduccion*/}
                {/*course.introVideoUrl ? (
                  <div className="aspect-video rounded-2xl overflow-hidden bg-ink/5">
                    <iframe
                      className="w-full h-full"
                      src=""//url de video
                      title={`Introducción — ${course.titulo}`}
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div
                    className={`relative aspect-video rounded-2xl overflow-hidden card-gradient-${
                      (index % 4) + 1
                    } grid place-items-center`}
                  >
                    <div className="text-center px-6">
                      <CirclePlay
                        size={64}
                        className="mx-auto text-white/90 drop-shadow"
                        aria-hidden="true"
                      />
                      <p className="mt-4 font-display font-semibold text-white/90">
                        Video de introducción (~1 min)
                      </p>
                      <p className="mt-1 text-sm text-white/70">
                        [PENDIENTE] Se agregará próximamente
                      </p>
                    </div>
                  </div>
                )*/}
              </div>
            </div>


            {/* Panel de compra */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 glass-strong rounded-3xl p-6 sm:p-7 space-y-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink/60">
                    Precio
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-display text-5xl font-bold text-primary">
                      ${course.precio.toString()}
                    </span>
                    <span className="text-ink/60 text-sm">USD</span>
                  </div>
                </div>
                <a
                  href= "#"//url de compra
                  className="btn-primary btn-primary-hover w-full inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold"
                >
                  Comprar este curso
                </a>
                <div className="glass rounded-2xl p-4 text-sm text-ink/75 leading-relaxed">
                  <p className="font-semibold text-ink mb-1">📩 Acceso inmediato</p>
                  <p>
                    Recibirás el enlace del curso en tu correo al confirmar el
                    pago. <strong>Necesitas una cuenta de Google para acceder.</strong>
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-ink/75">
                  {[
                    "Acceso desde cualquier dispositivo",
                    "Contenido 95% en video",
                    "PDFs de apoyo incluidos",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <CircleCheck size={16} className="text-primary" aria-hidden="true" /> {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${SITE.supportEmail}`}
                  className="flex items-center justify-center gap-2 text-sm text-ink/70 hover:text-primary pt-2 border-t border-white/60"
                >
                  <Mail size={14} aria-hidden="true" /> ¿Dudas? Escríbenos
                </a>
              </div>
            </aside>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
