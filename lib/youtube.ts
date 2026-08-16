/**
 * Datos reales del canal, leídos el 16 ago 2026 del feed público
 * https://www.youtube.com/feeds/videos.xml?channel_id=UCSi1HNth5US2-lJlwEZpgeA
 * Las cifras de suscriptores/videos son de esa fecha: revisarlas de vez en cuando.
 */
export const YOUTUBE = {
  handle: "@JoelAutomotrizenAccion",
  channelId: "UCSi1HNth5US2-lJlwEZpgeA",
  url: "https://www.youtube.com/@JoelAutomotrizenAccion",
  subscribers: "60.6 mil",
  videoCount: "1,300+",
};

export interface YoutubeVideo {
  id: string;
  title: string;
  duration: string;
  publishedAt: string; // ISO
  thumb: string;
}

/** Videos largos del canal (los Shorts quedan fuera a propósito). */
export const FEATURED_VIDEOS: YoutubeVideo[] = [
  {
    id: "NNFDZyOppLA",
    title: "Toyota Tacoma no arranca: resumen de la lógica del diagnóstico",
    duration: "19:58",
    publishedAt: "2026-08-14",
    thumb: "/youtube/NNFDZyOppLA.jpg",
  },
  {
    id: "q_WKAVUs8DQ",
    title: "Clase gratis en vivo #4: transductores de presión de cilindro",
    duration: "1:34:28",
    publishedAt: "2026-08-13",
    thumb: "/youtube/q_WKAVUs8DQ.jpg",
  },
  {
    id: "ekrehgHpU2I",
    title: "Mi diagnóstico incorrecto de sensor de oxígeno",
    duration: "14:00",
    publishedAt: "2026-08-07",
    thumb: "/youtube/ekrehgHpU2I.jpg",
  },
  {
    id: "SgPIb9H4mqc",
    title: "Tu Highlander híbrido tiene un problema grave: mira estos códigos",
    duration: "12:43",
    publishedAt: "2026-07-31",
    thumb: "/youtube/SgPIb9H4mqc.jpg",
  },
  {
    id: "rqUjdVwraeE",
    title: "¿Por qué pierdes horas buscando en diagramas viejos a colores?",
    duration: "7:09",
    publishedAt: "2026-07-26",
    thumb: "/youtube/rqUjdVwraeE.jpg",
  },
  {
    id: "bluP1e7a6rQ",
    title: "Por qué los clientes escogen mecánicos malos (parte 2)",
    duration: "6:37",
    publishedAt: "2026-07-20",
    thumb: "/youtube/bluP1e7a6rQ.jpg",
  },
];

export const watchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
