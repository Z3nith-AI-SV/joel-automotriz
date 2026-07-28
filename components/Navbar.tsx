"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav" : ""
        }`}
        style={scrolled ? undefined : { background: "transparent" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-display font-bold text-ink">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl btn-primary text-white text-lg">
              J
            </span>
            <span className="hidden sm:inline text-lg tracking-tight">
              Joel Automotriz <span className="text-primary">en Acción</span>
            </span>
            <span className="sm:hidden text-base">Joel Automotriz</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 hover:text-ink hover:bg-white/60 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/cursos"
              className="hidden sm:inline-flex btn-primary btn-primary-hover items-center rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              Ver cursos
            </Link>
            <button
              type="button"
              aria-label="Abrir menú"
              onClick={() => setOpen(true)}
              className="lg:hidden grid place-items-center h-10 w-10 rounded-full glass-chip text-ink"
            >
              <Menu size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[84%] max-w-sm glass-strong p-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-lg text-ink">Menú</span>
            <button
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="grid place-items-center h-10 w-10 rounded-full glass-chip"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-ink hover:bg-white/60"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/cursos"
              onClick={() => setOpen(false)}
              className="mt-4 btn-primary btn-primary-hover rounded-full px-5 py-3 text-center text-base font-semibold"
            >
              Ver los 34 cursos
            </Link>
          </nav>
        </aside>
      </div>

      {/* Espaciador bajo el header fijo */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
}
