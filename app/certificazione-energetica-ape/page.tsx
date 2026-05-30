import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Certificazione Energetica APE Roma | Geom. Leonardo Carnevale",
  description:
    "Attestato di Prestazione Energetica APE a Roma e provincia. APE per vendita, locazione e pratiche immobiliari. Richiedi una consulenza.",
};

export default function ApePage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <header className="fixed left-0 top-0 z-40 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
    <Link href="/" className="group flex items-center gap-4">
      <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/90 shadow-lg transition duration-300 group-hover:border-white/40">
              <Image src="/logo-geometra-carnevale.jpg" alt="Logo Geometra Carnevale" fill priority className="object-cover" />
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
      <section className="px-6 pt-32 pb-20 border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Servizi
          </p>

          <h1 className="mb-8 text-4xl font-extralight leading-tight md:text-6xl">
            Certificazione Energetica APE
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
            L’Attestato di Prestazione Energetica certifica la classe energetica
            di un immobile e ne descrive le prestazioni dal punto di vista dei
            consumi. È richiesto in diverse situazioni, tra cui vendita e
            locazione di immobili.
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
                <a className="block hover:text-white" href="#cos-e-ape">
                  Cos’è l’APE
                </a>
                <a className="block hover:text-white" href="#quando-serve">
                  Quando serve
                </a>
                <a className="block hover:text-white" href="#come-viene-redatto">
                  Come viene redatto
                </a>
                <a className="block hover:text-white" href="#tempi">
                  Tempi di rilascio
                </a>
                <a className="block hover:text-white" href="#vendita-locazione">
                  Vendita e locazione
                </a>
                <a className="block hover:text-white" href="#faq">
                  FAQ
                </a>
              </nav>
            </div>
          </aside>

          <div className="space-y-20">
            <section id="cos-e-ape" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                Cos’è l’APE
              </h2>
              <p className="leading-relaxed text-zinc-400">
                L’Attestato di Prestazione Energetica è il documento che
                attribuisce una classe energetica all’immobile, da A4 a G,
                sulla base delle sue caratteristiche costruttive e
                impiantistiche. L’APE fornisce informazioni sui consumi
                energetici e rappresenta uno strumento utile per valutare
                l’efficienza energetica di un edificio.
              </p>
            </section>

            <section id="quando-serve" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                Quando serve
              </h2>

              <p className="mb-6 leading-relaxed text-zinc-400">
                L’APE è generalmente richiesto in diverse situazioni legate
                alla gestione e alla circolazione degli immobili.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Vendita di immobili",
                  "Locazione di immobili",
                  "Nuove costruzioni",
                  "Alcuni interventi edilizi",
                  "Pratiche immobiliari specifiche",
                  "Situazioni previste dalla normativa vigente",
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

            <section id="come-viene-redatto" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                Come viene redatto
              </h2>

              <div className="space-y-4">
                {[
                  "Sopralluogo dell’immobile",
                  "Rilievo delle caratteristiche costruttive",
                  "Analisi degli impianti presenti",
                  "Elaborazione dei dati raccolti",
                  "Emissione dell’attestato secondo la normativa vigente",
                ].map((item, index) => (
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
            </section>

            <section id="tempi" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                Tempi di rilascio
              </h2>

              <p className="leading-relaxed text-zinc-400">
                I tempi di rilascio dipendono dalla tipologia dell’immobile,
                dalla disponibilità per il sopralluogo e dalla documentazione
                disponibile. Dopo il sopralluogo e la raccolta delle
                informazioni necessarie, il certificato viene predisposto in
                tempi rapidi.
              </p>
            </section>

            <section id="vendita-locazione" className="scroll-mt-32">
              <h2 className="mb-8 text-3xl font-light">
                APE per vendita e locazione
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
                  <h3 className="mb-4 text-2xl font-light">
                    Vendita di immobili
                  </h3>
                  <p className="leading-relaxed text-zinc-400">
                    L’APE è richiesto nella maggior parte delle compravendite
                    immobiliari e consente di comunicare all’acquirente la
                    classe energetica dell’immobile.
                  </p>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
                  <h3 className="mb-4 text-2xl font-light">
                    Locazione di immobili
                  </h3>
                  <p className="leading-relaxed text-zinc-400">
                    Per molti contratti di locazione è necessario disporre
                    dell’Attestato di Prestazione Energetica e riportare le
                    informazioni energetiche previste dalla normativa.
                  </p>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-32">
              <h2 className="mb-8 text-3xl font-light">
                Domande frequenti
              </h2>

              <div className="space-y-5">
                {[
                  {
                    q: "Quanto dura un APE?",
                    a: "L’APE ha normalmente una validità fino a 10 anni, salvo modifiche rilevanti all’immobile o agli impianti.",
                  },
                  {
                    q: "È obbligatorio il sopralluogo?",
                    a: "Sì, la normativa prevede il sopralluogo del tecnico incaricato.",
                  },
                  {
                    q: "Posso vendere casa senza APE?",
                    a: "Nella maggior parte dei casi l’APE è richiesto dalla normativa vigente.",
                  },
                  {
                    q: "Quanto costa un APE?",
                    a: "Il costo varia in base alle caratteristiche dell’immobile. È possibile richiedere un preventivo personalizzato.",
                  },
                  {
                    q: "Quanto tempo serve per ottenere l’APE?",
                    a: "I tempi dipendono dalla disponibilità dell’immobile e dalla documentazione necessaria.",
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
                Hai bisogno di un APE a Roma?
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
