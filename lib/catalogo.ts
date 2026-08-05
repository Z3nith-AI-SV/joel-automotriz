/**
 * Data mock para la sección /catalogo.
 * TODO: reemplazar por los cursos reales (y por lib/courses.ts o Prisma)
 * cuando se defina el origen definitivo de los datos.
 */
export interface CatalogCourse {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  category: string;
}

export const CATALOG_CATEGORIES = [
  "Todas",
  "Electricidad",
  "Escáner",
  "Osciloscopio",
  "Redes de comunicación",
  "Híbridos",
  "Transmisiones",
  "Diésel",
] as const;

export const CATALOG_COURSES: CatalogCourse[] = [
  {
    id: "circuitos-pull-up-pull-down",
    image: "/images/catalogo/electricidad.svg",
    title: "Circuitos Eléctricos Pull-Up y Pull-Down",
    description:
      "Comprende a fondo cómo se diseñan y comportan los circuitos pull-up y pull-down en los sistemas electrónicos modernos.",
    price: 75,
    category: "Electricidad",
  },
  {
    id: "esquemas-sae-din",
    image: "/images/catalogo/diagramas.svg",
    title: "Interpretación de Esquemas Eléctricos SAE y DIN",
    description:
      "Aprende a leer diagramas eléctricos bajo los dos estándares que dominan la industria automotriz.",
    price: 75,
    category: "Electricidad",
  },
  {
    id: "escaner-pids-graficas",
    image: "/images/catalogo/escaner.svg",
    title: "Escáner Módulo 1: Definición de PIDs y Gráficas",
    description:
      "Domina la lectura de PIDs y el análisis gráfico como base de un diagnóstico serio con escáner.",
    price: 75,
    category: "Escáner",
  },
  {
    id: "escaner-funciones-especiales",
    image: "/images/catalogo/escaner-2.svg",
    title: "Escáner Módulo 2: Funciones Especiales",
    description:
      "Funciones bidireccionales, adaptaciones y programaciones básicas con escáner profesional.",
    price: 95,
    category: "Escáner",
  },
  {
    id: "osciloscopio-basico",
    image: "/images/catalogo/osciloscopio.svg",
    title: "Osciloscopio Módulo 1: Nivel Básico y Escalas",
    description:
      "Primer contacto con el osciloscopio: configuración, ajuste de escalas y lectura básica de señales.",
    price: 75,
    category: "Osciloscopio",
  },
  {
    id: "osciloscopio-pinza",
    image: "/images/catalogo/osciloscopio-2.svg",
    title: "Osciloscopio Módulo 2: Pinza Amperimétrica",
    description:
      "Uso profesional de la pinza amperimétrica y análisis de compresión relativa del motor.",
    price: 95,
    category: "Osciloscopio",
  },
  {
    id: "red-can",
    image: "/images/catalogo/red-can.svg",
    title: "Red CAN: Composición, Topología y Diagnóstico",
    description:
      "Estructura, topología y técnicas de diagnóstico de la red CAN en los vehículos actuales.",
    price: 120,
    category: "Redes de comunicación",
  },
  {
    id: "hibridos-alto-voltaje",
    image: "/images/catalogo/hibridos.svg",
    title: "Híbridos Módulo 2: Diagnóstico de Alto Voltaje",
    description:
      "Procedimientos seguros de diagnóstico en el sistema de alto voltaje de vehículos híbridos.",
    price: 165,
    category: "Híbridos",
  },
  {
    id: "transmisiones-electronica",
    image: "/images/catalogo/transmisiones.svg",
    title: "Transmisiones Módulo 2: Parte Electrónica",
    description:
      "Control electrónico y diagnóstico avanzado de las transmisiones automáticas modernas.",
    price: 120,
    category: "Transmisiones",
  },
  {
    id: "diesel-heui",
    image: "/images/catalogo/diesel.svg",
    title: "Diésel Sistema HEUI: Ford, International y Caterpillar",
    description:
      "Sistema HEUI en motores diésel Ford, International y Caterpillar: operación y diagnóstico real.",
    price: 175,
    category: "Diésel",
  },
  {
    id: "red-lin",
    image: "/images/catalogo/red-lin.svg",
    title: "Red LIN: Diagnóstico Profundo",
    description:
      "Cómo funcionan y cómo se diagnostican las redes LIN paso a paso, con casos reales de taller.",
    price: 95,
    category: "Redes de comunicación",
  },
  {
    id: "hibridos-inversor",
    image: "/images/catalogo/hibridos-2.svg",
    title: "Híbridos Módulo 3: Conversor, Inversor y Batería",
    description:
      "Funcionamiento y diagnóstico del conversor, el inversor y la batería de alto voltaje.",
    price: 165,
    category: "Híbridos",
  },
];
