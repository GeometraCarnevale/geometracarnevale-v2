"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const pratiche = {
  "123": {
    numero: "123",
    cliente: "Mario Rossi",
    servizio: "Pratica catastale",
    stato: "In lavorazione",
    ultimoAggiornamento: "31/05/2026",
    aggiornamenti: [
      "Incarico ricevuto",
      "Documentazione acquisita",
      "Verifica tecnica in corso",
      "Pratica in predisposizione",
    ],
  },
};

export default function StatoPraticaPage() {
  const [codice, setCodice] = useState("");
  const pratica = pratiche[codice as keyof typeof pratiche];

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <header className="fixed left-0 top-0 z-40 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="group flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/90 shadow-lg">
              <Image
                src="/logo-geometra-carnevale.jpg"
                alt="Logo Geometra Carnevale"
                fill
                priority
                className="object-cover"
              />
            </div>

            <span className="text-lg font-light uppercase tracking-[0.2em] md:text-xl">
              Geom. Leonardo Carnevale
            </span>
          </Link>

          <nav className="hidden items-center gap-10 text-sm uppercase tracking-[0.15em] text-zinc-300 md:flex">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/#servizi" className="hover:text-white">
              Servizi
            </Link>
            <Link href="/#contatti" className="hover:text-white">
              Contatti
            </Link>
          </nav>
        </div>
      </header>

      <section className="px-6 pb-20 pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Area clienti
          </p>

          <h1 className="mb-8 text-4xl font-extralight leading-tight md:text-6xl">
            Stato Pratica
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Inserisci il numero pratica comunicato dallo studio per consultare
            lo stato di avanzamento.
          </p>

          <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <label className="mb-3 block text-sm uppercase tracking-[0.2em] text-zinc-500">
              Numero pratica
            </label>

            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                value={codice}
                onChange={(e) => setCodice(e.target.value.trim())}
                placeholder="Esempio: 123"
                className="w-full rounded-full border border-white/10 bg-black px-6 py-4 text-white outline-none transition focus:border-white/40"
              />
            </div>

            {codice && !pratica && (
              <p className="mt-6 text-zinc-400">
                Nessuna pratica trovata con questo numero.
              </p>
            )}

            {pratica && (
              <div className="mt-10 border-t border-white/10 pt-8">
                <div className="mb-8">
                  <p className="mb-2 text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Pratica n. {pratica.numero}
                  </p>

                  <h2 className="text-3xl font-light">{pratica.servizio}</h2>

                  <p className="mt-3 text-zinc-400">
                    Cliente: {pratica.cliente}
                  </p>
                </div>

                <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <p className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Stato attuale
                  </p>

                  <p className="text-2xl font-light text-white">
                    {pratica.stato}
                  </p>

                  <p className="mt-2 text-zinc-400">
                    Ultimo aggiornamento: {pratica.ultimoAggiornamento}
                  </p>
                </div>

                <div className="space-y-4">
                  {pratica.aggiornamenti.map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <span className="text-zinc-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-zinc-500">
            Questa area è pensata per fornire un aggiornamento sintetico sullo
            stato della pratica. Per comunicazioni urgenti o chiarimenti è
            sempre possibile contattare direttamente lo studio.
          </p>
        </div>
      </section>
    </main>
  );
}
