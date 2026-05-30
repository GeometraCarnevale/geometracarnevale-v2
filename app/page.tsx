"use client";

import Image from "next/image";
import {
  Building2,
  ClipboardCheck,
  FileText,
  Home,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Zap,
  type LucideIcon
} from "lucide-react";
import { useEffect, useState } from "react";

type Servizio = {
  title: string;
  desc: string;
  Icon: LucideIcon;
  href?: string;
};

const servizi: Servizio[] = [
  { title: "Pratiche Catastali", desc: "DOCFA, variazioni catastali, accatastamenti, volture, visure e planimetrie.", Icon: FileText, href: "/pratiche-catastali", },
  { title: "Pratiche Urbanistiche", desc: "CILA, SCIA, sanatorie, pratiche edilizie e consulenza urbanistica.", Icon: Home, href: "/pratiche-urbanistiche", },
 {
  title: "APE",
  desc: "Certificati di Prestazione Energetica per immobili residenziali e commerciali.",
  Icon: Zap,
  href: "/certificazione-energetica-ape"
},
  { title: "Apertura Attività", desc: "Apertura attività commerciali e gestione pratiche amministrative.", Icon: Building2, href: "/apertura-attivita", },
  { title: "Perizie di Stima", desc: "Valutazioni immobiliari e consulenze tecniche estimative.", Icon: Ruler },
  { title: "Occupazione Suolo Pubblico", desc: "Pratiche OSP per attività, cantieri, dehors e autorizzazioni comunali.", Icon: Landmark }
];

const menuItems: [string, string][] = [
  ["Home", "#home"],
  ["Chi Sono", "#chi-sono"],
  ["Servizi", "#servizi"],
  ["Contatti", "#contatti"]
];

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = window.localStorage.getItem("cookie-consent");
    if (!choice) setVisible(true);
  }, []);

  function saveChoice(choice: "all" | "essential" | "reject") {
    window.localStorage.setItem("cookie-consent", choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[95%] max-w-3xl -translate-x-1/2 rounded-3xl border border-white/10 bg-black/90 p-6 shadow-2xl backdrop-blur-2xl">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-white">Cookie Policy</p>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-400">Questo sito utilizza cookie tecnici ed eventualmente cookie di terze parti per migliorare l’esperienza di navigazione.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={() => saveChoice("all")} className="rounded-full bg-white px-5 py-3 text-xs uppercase tracking-[0.2em] text-black transition hover:bg-zinc-200">Accetta tutti</button>
          <button type="button" onClick={() => saveChoice("essential")} className="rounded-full border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black">Solo essenziali</button>
          <button type="button" onClick={() => saveChoice("reject")} className="rounded-full border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black">Rifiuta</button>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d0d0d] text-white">
      <header className="fixed left-0 top-0 z-40 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="group flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/90 shadow-lg transition duration-300 group-hover:border-white/40">
              <Image src="/logo-geometra-carnevale.jpg" alt="Logo Geometra Carnevale" fill priority className="object-cover" />
            </div>
            <h1 className="text-lg font-light uppercase tracking-[0.2em] transition duration-300 group-hover:text-zinc-300 md:text-xl">Geom. Leonardo Carnevale</h1>
          </a>
          <nav className="hidden items-center gap-10 text-sm uppercase tracking-[0.15em] text-zinc-300 md:flex">
            {menuItems.map(([label, href]) => (
              <a key={label} href={href} className="group relative overflow-hidden pb-2">
                <span>{label}</span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_25%)]" />
        <div className="absolute left-[-100px] top-[-150px] h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="absolute inset-0 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl" />
          <div className="relative z-10 px-6 py-20">
            <div className="mb-12 flex justify-center">
              <div className="relative h-44 w-44 overflow-hidden rounded-full border border-white/10 bg-white/95 shadow-[0_20px_80px_rgba(255,255,255,0.08)] backdrop-blur-xl">
                <Image src="/logo-geometra-carnevale.jpg" alt="Logo Geometra Carnevale" fill priority className="object-cover" />
              </div>
            </div>
            <h2 className="mb-8 text-5xl font-extralight leading-tight tracking-tight text-white/95 md:text-7xl"><span>Eleganza tecnica.</span><br /><span>Precisione progettuale.</span></h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-zinc-300">Pratiche catastali, pratiche urbanistiche, APE, condoni edilizi, SCIA nuova attività, occupazione di suolo pubblico, perizie di stima e consulenza tecnica professionale per privati e attività.</p>
            <div className="flex flex-col justify-center gap-5 sm:flex-row">
              <a href="#contatti" className="rounded-full border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.2em] transition duration-300 hover:bg-white hover:text-black">Richiedi consulenza</a>
            </div>
          </div>
        </div>
      </section>

      <section id="chi-sono" className="border-t border-white/10 py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
          <div><p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">Chi Sono</p><h3 className="mb-8 text-4xl font-extralight leading-tight md:text-5xl"><span>Leonardo Carnevale</span></h3></div>
          <div className="space-y-6 text-lg leading-relaxed text-zinc-400"><p>Geometra iscritto all’albo nel 2024 con esperienza pregressa di 5 anni nel settore tecnico e amministrativo.</p><p>Affiliato ad uno studio tecnico con esperienza ventennale, opero nel campo catastale, urbanistico ed edilizio con un approccio moderno, preciso e orientato al cliente.</p></div>
        </div>
      </section>

      <section id="servizi" className="border-t border-white/10 bg-[#111111] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center"><p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">Servizi</p><h3 className="text-4xl font-extralight md:text-6xl">Di cosa mi occupo</h3></div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servizi.map((item) => {
  const Icon = item.Icon;
  const CardTag = item.href ? "a" : "div";

return (
  <CardTag
    key={item.title}
    href={item.href}
    className="group block rounded-[30px] border border-white/10 bg-white/[0.03] p-10 shadow-[0_8px_32px_rgba(255,255,255,0.03)] backdrop-blur-2xl transition duration-500 hover:border-white/30"
  >
    <div className="mb-8 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white text-black shadow-lg">
      <Icon size={28} strokeWidth={1.5} />
    </div>

    <h4 className="mb-6 text-2xl font-light transition group-hover:text-white">
      {item.title}
    </h4>

    <p className="leading-relaxed text-zinc-500">{item.desc}</p>
  </CardTag>
);
            })}
          </div>
        </div>
      </section>

      <section id="contatti" className="border-t border-white/10 py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">Contatti</p><h3 className="mb-10 text-4xl font-extralight md:text-6xl">Contatti</h3>
          <div className="mb-12 space-y-5 text-lg text-zinc-300">
            <p className="flex items-center justify-center gap-3"><Phone size={18} /> 331 968 0185</p>
            <p className="flex items-center justify-center gap-3"><Mail size={18} /> leonardocarnevale97@gmail.com</p>
            <p className="flex items-center justify-center gap-3"><ShieldCheck size={18} /> leonardo.carnevale@geopec.it</p>
          </div>
          <div className="flex flex-col justify-center gap-5 sm:flex-row">
            <a href="tel:+393319680185" className="rounded-full border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black">Chiama ora</a>
            <a href="https://wa.me/393319680185" target="_blank" rel="noreferrer" className="rounded-full bg-white px-8 py-4 text-sm uppercase tracking-[0.2em] text-black transition hover:bg-zinc-200">WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-sm uppercase text-zinc-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="space-y-2 text-center tracking-[0.15em] md:text-left"><p>© 2026 Leonardo Carnevale</p><p className="inline-flex items-center gap-2"><MapPin size={14} /> Via Crescentino 91 · Roma</p><p>P. IVA 17843991005</p></div>
          <div className="flex items-center gap-6 text-xs tracking-[0.15em]"><a href="https://www.iubenda.com/privacy-policy/37569311" target="_blank" rel="noreferrer" className="transition hover:text-white">Privacy Policy</a><a href="https://www.iubenda.com/privacy-policy/37569311/cookie-policy" target="_blank" rel="noreferrer" className="transition hover:text-white">Cookie Policy</a></div>
        </div>
      </footer>
      <CookieBanner />
    </main>
  );
}
