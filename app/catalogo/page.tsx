import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassBlobs from "@/components/GlassBlobs";
import SearchBar from "@/components/SearchBar";
import CategoryChip from "@/components/CategoryChip";
import CourseGridCard from "@/components/CourseGridCard";
import { CATALOG_CATEGORIES, CATALOG_COURSES } from "@/lib/catalogo";

export const metadata: Metadata = {
  title: "Cursos",
  description:
    "Cursos de diagnóstico automotriz por Joel Navarro: escáner, osciloscopio, redes CAN/LIN, híbridos, transmisiones y diésel.",
};

export default function CatalogoPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative overflow-hidden hero-gradient pt-12 pb-10 sm:pt-16 sm:pb-14">
          <GlassBlobs />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Cursos
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-ink text-balance max-w-3xl">
              Aprende diagnóstico automotriz en serio
            </h1>
            <p className="mt-4 text-lg text-ink/70 max-w-2xl">
              Cada curso combina teoría, demostraciones en autos sanos y
              diagnóstico real de fallas complejas.
            </p>

            <SearchBar
              className="mt-8 max-w-2xl"
              label="Buscar cursos"
              placeholder="Buscar por nombre, tema o categoría…"
            />

            <div className="mt-5 flex flex-wrap gap-2">
              {CATALOG_CATEGORIES.map((category, i) => (
                <CategoryChip
                  key={category}
                  label={category}
                  active={i === 0}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-ink/60 mb-6">
              <strong className="text-ink">{CATALOG_COURSES.length}</strong>{" "}
              cursos disponibles
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {CATALOG_COURSES.map((course) => (
                <CourseGridCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
