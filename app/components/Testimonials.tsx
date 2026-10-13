"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#vision", label: "Vision" },
  { href: "#values", label: "Values" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpeg"
            alt="Atqon Industrial Services"
            width={48}
            height={48}
            className="object-contain"
            priority
          />
          <div className="leading-tight">
            <p className="font-bold text-slate-900">ATQON</p>
            <p className="text-[10px] tracking-widest text-slate-500">
              INDUSTRIAL SERVICES
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-amber-600">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-slate-800 text-2xl leading-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-4 text-slate-700 border-t border-slate-200 pt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="hover:text-amber-600"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}