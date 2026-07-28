import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "Catálogo de cursos de diagnóstico automotriz",
  description:
    "34 cursos de diagnóstico automotriz por Joel Navarro: escáner, osciloscopio, redes CAN/LIN, híbridos, transmisiones, diésel y más.",
  openGraph: {
    title: "Catálogo de cursos de diagnóstico automotriz",
    description:
      "34 cursos de diagnóstico automotriz por Joel Navarro: escáner, osciloscopio, redes CAN/LIN, híbridos, transmisiones, diésel y más.",
  },
};

export default function CursosPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <CatalogClient />
      </main>
      <Footer />
    </div>
  );
}
