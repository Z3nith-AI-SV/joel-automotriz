import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YoutubeIcon,
} from "./SocialIcons";

const SOCIALS = [
  { href: SITE.youtube, label: "YouTube", icon: <YoutubeIcon /> },
  { href: SITE.facebook, label: "Facebook", icon: <FacebookIcon /> },
  { href: SITE.tiktok, label: "TikTok", icon: <TikTokIcon /> },
  { href: SITE.instagram, label: "Instagram", icon: <InstagramIcon /> },
];

export default function Footer() {
  return (
    <footer className="relative pastel-gradient border-t border-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Link href="/" aria-label="Joel Automotive in Action — inicio" className="inline-block">
              <Image
                src="/brand/logo.png"
                alt="Joel Automotive in Action"
                width={1000}
                height={369}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              Cursos de diagnóstico automotriz por Joel Navarro, técnico con 11
              certificaciones ASE y más de 30 años en el oficio.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-ink text-sm uppercase tracking-wider">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink/70 hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-ink text-sm uppercase tracking-wider">
              Síguenos
            </h3>
            <div className="mt-4 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass-chip grid h-11 w-11 place-items-center rounded-2xl text-ink hover:text-primary transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${SITE.supportEmail}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-ink/70 hover:text-primary"
            >
              <Mail size={16} aria-hidden="true" /> {SITE.supportEmail}
            </a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/60 flex flex-wrap items-center justify-between gap-3 text-xs text-ink/60">
          <p>
            © {new Date().getFullYear()} Joel Automotriz en Acción. Todos los
            derechos reservados.
          </p>
          <p>Hecho con 🔧 para técnicos hispanohablantes.</p>
        </div>
      </div>
    </footer>
  );
}
