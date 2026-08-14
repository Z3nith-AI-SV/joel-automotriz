import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogClient from "./CatalogClient";
import  {prisma} from '@/lib/db/prisma'

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

export default async function CursosPage() {
    const cursos = await prisma.cursos.findMany();
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <CatalogClient cursos={cursos} />
      </main>
      <Footer />
    </div>
  );
}
