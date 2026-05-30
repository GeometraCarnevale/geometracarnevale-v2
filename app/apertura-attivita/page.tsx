import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Apertura Attività Roma | Geom. Leonardo Carnevale",
  description:
    "Assistenza per apertura attività commerciali a Roma e provincia. SCIA commerciale, SUAP, occupazione suolo pubblico, dehors, insegne e autorizzazioni.",
};

export default function AperturaAttivitaPage() {
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
            Apertura Attività
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
            Assistenza tecnica e amministrativa per l’apertura di attività
            commerciali a Roma e provincia. Supporto nella predisposizione
            delle pratiche necessarie e nei rapporti con gli enti competenti.
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
                <a className="block hover:text-white" href="#cosa-comprende">
                  Cosa comprende
                </a>
                <a className="block hover:text-white" href="#quando-serve">
                  Quando serve
                </a>
                <a className="block hover:text-white" href="#servizi-offerti">
                  Servizi offerti
                </a>
                <a className="block hover:text-white" href="#scia-commerciale">
                  SCIA commerciale
                </a>
                <a className="block hover:text-white" href="#osp">
                  OSP
                </a>
                <a className="block hover:text-white" href="#suap">
                  SUAP
                </a>
                <a className="block hover:text-white" href="#faq">
                  FAQ
                </a>
              </nav>
            </div>
          </aside>

          <div className="space-y-20">
            <section id="cosa-comprende" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                Cosa comprende
              </h2>

              <p className="leading-relaxed text-zinc-400">
                L’apertura di un’attività commerciale richiede spesso il rispetto
                di specifici adempimenti amministrativi e tecnici. A seconda
                della tipologia dell’attività possono essere necessarie
                comunicazioni, segnalazioni o autorizzazioni da presentare agli
                enti competenti.
              </p>
            </section>

            <section id="quando-serve" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                Quando serve
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Apertura di negozi",
                  "Apertura di bar e ristoranti",
                  "Attività artigianali",
                  "Studi professionali",
                  "Attività soggette a SCIA",
                  "Utilizzo di spazi esterni",
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
              <h2 className="mb-6 text-3xl font-light">
                Servizi offerti
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "SCIA commerciale",
                  "Pratiche SUAP",
                  "Occupazione Suolo Pubblico (OSP)",
                  "Dehors",
                  "Insegne e mezzi pubblicitari",
                  "Verifiche preliminari",
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

            <section id="scia-commerciale" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                SCIA commerciale
              </h2>

              <p className="leading-relaxed text-zinc-400">
                La SCIA commerciale è necessaria per numerose attività
                economiche e consente l’avvio dell’attività nei casi previsti
                dalla normativa vigente. La pratica varia in base alla tipologia
                dell’attività, ai locali utilizzati e agli eventuali requisiti
                richiesti dagli enti competenti.
              </p>
            </section>

            <section id="osp" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                Occupazione Suolo Pubblico
              </h2>

              <p className="leading-relaxed text-zinc-400">
                L’Occupazione Suolo Pubblico è necessaria quando si intende
                utilizzare spazi pubblici per dehors, tavoli e sedie, ponteggi,
                cantieri o altre occupazioni temporanee e permanenti. La pratica
                richiede la verifica delle disposizioni comunali e delle
                caratteristiche dell’area interessata.
              </p>
            </section>

            <section id="suap" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                SUAP
              </h2>

              <p className="leading-relaxed text-zinc-400">
                Lo Sportello Unico per le Attività Produttive rappresenta il
                punto di riferimento per molte pratiche amministrative legate
                all’avvio, alla modifica e alla gestione delle attività
                economiche.
              </p>
            </section>

            <section id="faq" className="scroll-mt-32">
              <h2 className="mb-8 text-3xl font-light">
                Domande frequenti
              </h2>

              <div className="space-y-5">
                {[
                  {
                    q: "Quando serve la SCIA commerciale?",
                    a: "La necessità della SCIA dipende dalla tipologia dell’attività e dalla normativa applicabile.",
                  },
                  {
                    q: "Serve l’OSP per tavoli e sedie esterni?",
                    a: "In molti casi sì. È necessario verificare le disposizioni del Comune e le caratteristiche dell’occupazione richiesta.",
                  },
                  {
                    q: "Quanto tempo serve per aprire un’attività?",
                    a: "I tempi dipendono dalla documentazione necessaria e dagli adempimenti richiesti per il singolo caso.",
                  },
                  {
                    q: "Cos’è il SUAP?",
                    a: "È lo Sportello Unico per le Attività Produttive, punto di riferimento per molte pratiche amministrative legate alle attività economiche.",
                  },
                  {
                    q: "Quanto costa una pratica per apertura attività?",
                    a: "Il costo varia in base alla tipologia dell’attività e alle pratiche necessarie. È possibile richiedere un preventivo personalizzato.",
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
                Hai bisogno di assistenza per l’apertura di un’attività?
              </h2>

              <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-zinc-400">
                Contattami per ricevere informazioni o richiedere un preventivo
                senza impegno.
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
