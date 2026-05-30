import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Pratiche Catastali Roma | Geom. Leonardo Carnevale",
  description:
    "Pratiche catastali a Roma e provincia. DOCFA, variazioni catastali, accatastamenti, volture, visure e planimetrie catastali. Richiedi una consulenza.",
};

export default function PraticheCatastaliPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <header className="fixed left-0 top-0 z-40 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="group flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/90 shadow-lg transition duration-300 group-hover:border-white/40">
              <Image
                src="/logo-geometra-carnevale.jpg"
                alt="Logo Geometra Carnevale"
                fill
                priority
                className="object-cover"
              />
            </div>

            <span className="text-lg font-light uppercase tracking-[0.2em] transition duration-300 group-hover:text-zinc-300 md:text-xl">
              Geom. Leonardo Carnevale
            </span>
          </Link>

          <nav className="hidden items-center gap-10 text-sm uppercase tracking-[0.15em] text-zinc-300 md:flex">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/#chi-sono" className="hover:text-white">
              Chi sono
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

      <section className="border-b border-white/10 px-6 pb-20 pt-40">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Servizi
          </p>

          <h1 className="mb-8 text-4xl font-extralight leading-tight md:text-6xl">
            Pratiche Catastali
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
            Assistenza per pratiche catastali, variazioni, accatastamenti,
            DOCFA, volture, visure e planimetrie catastali a Roma e provincia.
          </p>

          <Link
            href="/#contatti"
            className="mt-10 inline-flex rounded-full border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
          >
            Richiedi consulenza
          </Link>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.8fr_1.2fr]">
          <aside className="hidden md:block">
            <div className="sticky top-28 rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
                In questa pagina
              </p>

              <nav className="space-y-4 text-zinc-300">
                <a className="block hover:text-white" href="#cosa-sono">
                  Cosa sono
                </a>
                <a className="block hover:text-white" href="#quando-servono">
                  Quando servono
                </a>
                <a className="block hover:text-white" href="#servizi-offerti">
                  Servizi offerti
                </a>
                <a className="block hover:text-white" href="#docfa">
                  DOCFA
                </a>
                <a className="block hover:text-white" href="#tempi">
                  Tempi di lavorazione
                </a>
                <a className="block hover:text-white" href="#faq">
                  FAQ
                </a>
              </nav>
            </div>
          </aside>

          <div className="space-y-20">
            <section id="cosa-sono" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                Cosa sono le pratiche catastali
              </h2>
              <p className="leading-relaxed text-zinc-400">
                Le pratiche catastali comprendono tutte le attività necessarie
                per aggiornare, correggere o consultare i dati catastali di un
                immobile presso gli uffici competenti. Sono fondamentali per
                garantire la corretta rappresentazione dell’immobile e la
                coerenza tra lo stato di fatto e la documentazione catastale.
              </p>
            </section>

            <section id="quando-servono" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">Quando servono</h2>

              <p className="mb-6 leading-relaxed text-zinc-400">
                Una pratica catastale può essere necessaria in caso di modifiche
                interne, compravendite, successioni, variazioni di intestazione,
                aggiornamenti della planimetria o verifiche della situazione
                catastale dell’immobile.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Modifiche interne all’immobile",
                  "Compravendite immobiliari",
                  "Successioni e volture",
                  "Accatastamenti",
                  "Variazioni catastali",
                  "Verifica di visure e planimetrie",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-zinc-300"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </section>

            <section id="servizi-offerti" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">Servizi offerti</h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "DOCFA",
                  "Variazioni catastali",
                  "Accatastamenti",
                  "Volture catastali",
                  "Visure catastali",
                  "Planimetrie catastali",
                  "Fusioni e frazionamenti",
                  "Verifiche catastali preliminari",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section id="docfa" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">Pratiche DOCFA</h2>

              <p className="leading-relaxed text-zinc-400">
                Il DOCFA è la procedura utilizzata per presentare al Catasto
                Fabbricati nuove costruzioni e variazioni catastali. Attraverso
                questa pratica vengono aggiornati i dati identificativi,
                planimetrici e la rendita catastale dell’immobile.
              </p>
            </section>

            <section id="tempi" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                Tempi di lavorazione
              </h2>

              <p className="leading-relaxed text-zinc-400">
                I tempi dipendono dalla tipologia di pratica, dalla complessità
                dell’immobile e dalla documentazione disponibile. Dopo la
                raccolta dei dati necessari, la pratica viene predisposta e
                trasmessa agli uffici competenti.
              </p>
            </section>

            <section id="faq" className="scroll-mt-32">
              <h2 className="mb-8 text-3xl font-light">Domande frequenti</h2>

              <div className="space-y-5">
                {[
                  {
                    q: "Quando serve una variazione catastale?",
                    a: "Serve quando vengono modificate le caratteristiche dell’immobile, come distribuzione interna, consistenza, destinazione o altri elementi rilevanti ai fini catastali.",
                  },
                  {
                    q: "Cos’è una visura catastale?",
                    a: "La visura catastale è un documento che riporta i dati identificativi e reddituali dell’immobile, oltre alle informazioni relative agli intestatari.",
                  },
                  {
                    q: "Cos’è una planimetria catastale?",
                    a: "È la rappresentazione grafica dell’unità immobiliare depositata in Catasto. È spesso richiesta in caso di vendita, verifica documentale o pratiche tecniche.",
                  },
                  {
                    q: "Quanto costa una pratica catastale?",
                    a: "Il costo varia in base alla tipologia di pratica e alla complessità dell’immobile. È possibile richiedere un preventivo personalizzato.",
                  },
                  {
                    q: "Serve un sopralluogo?",
                    a: "In molti casi il sopralluogo è utile o necessario per verificare lo stato dei luoghi e predisporre correttamente la pratica.",
                  },
                ].map((item) => (
                  <div
                    key={item.q}
                    className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
                  >
                    <h3 className="mb-3 text-xl font-light">{item.q}</h3>
                    <p className="leading-relaxed text-zinc-400">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[36px] border border-white/10 bg-white/[0.05] p-10 text-center backdrop-blur-xl">
              <h2 className="mb-5 text-3xl font-light">
                Hai bisogno di una pratica catastale?
              </h2>

              <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-zinc-400">
                Contattami per ricevere informazioni o richiedere un preventivo
                senza impegno per il tuo immobile.
              </p>

              <Link
                href="/#contatti"
                className="inline-flex rounded-full bg-white px-8 py-4 text-sm uppercase tracking-[0.2em] text-black transition hover:bg-zinc-200"
              >
                Richiedi consulenza
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
