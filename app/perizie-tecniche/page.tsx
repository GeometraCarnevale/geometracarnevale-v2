import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Perizie Tecniche Roma | Geom. Leonardo Carnevale",
  description:
    "Perizie tecniche a Roma e provincia. Perizie immobiliari, stime, infiltrazioni, danni, umidità, relazioni tecniche e valutazione costi di ripristino.",
};

export default function PerizieTecnichePage() {
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
            Perizie Tecniche
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
            Perizie tecniche e valutazioni immobiliari a Roma e provincia.
            Supporto per stime, infiltrazioni, danni, umidità, relazioni
            tecniche, controversie e valutazione dei costi di ripristino.
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
                <a className="block hover:text-white" href="#perizie-immobiliari">
                  Perizie immobiliari
                </a>
                <a className="block hover:text-white" href="#infiltrazioni">
                  Infiltrazioni e danni
                </a>
                <a className="block hover:text-white" href="#come-si-svolge">
                  Come si svolge
                </a>
                <a className="block hover:text-white" href="#documenti">
                  Documenti utili
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
                Cosa sono le perizie tecniche
              </h2>

              <p className="leading-relaxed text-zinc-400">
                Le perizie tecniche sono valutazioni redatte da un tecnico
                finalizzate ad analizzare lo stato di un immobile, individuare
                eventuali criticità, documentare danni o stimare il valore di un
                bene. Possono essere utili sia per valutazioni immobiliari sia
                per problematiche tecniche come infiltrazioni, umidità o danni.
              </p>
            </section>

            <section id="quando-servono" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                Quando servono
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Compravendite immobiliari",
                  "Successioni ereditarie",
                  "Divisioni patrimoniali",
                  "Infiltrazioni e danni da acqua",
                  "Controversie tra privati o condomini",
                  "Valutazione dei costi di ripristino",
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

            <section id="perizie-immobiliari" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                Perizie immobiliari e stime
              </h2>

              <p className="mb-6 leading-relaxed text-zinc-400">
                Le perizie immobiliari sono utili per determinare il valore di
                un immobile sulla base delle sue caratteristiche, dello stato di
                conservazione, della posizione, della documentazione disponibile
                e dell’andamento del mercato.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Stime per vendita",
                  "Stime per acquisto",
                  "Successioni",
                  "Divisioni ereditarie",
                  "Valutazioni patrimoniali",
                  "Consulenze immobiliari",
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

            <section id="infiltrazioni" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                Perizie per infiltrazioni e danni
              </h2>

              <p className="leading-relaxed text-zinc-400">
                In presenza di infiltrazioni, umidità o danni agli immobili può
                essere utile una perizia tecnica finalizzata a individuare le
                possibili cause del problema, documentare lo stato dei luoghi e
                stimare gli interventi necessari al ripristino. La perizia può
                costituire un supporto utile nelle controversie tra privati,
                condomini o soggetti coinvolti.
              </p>
            </section>

            <section id="come-si-svolge" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                Come si svolge
              </h2>

              <div className="space-y-4">
                {[
                  "Analisi preliminare della problematica o dell’immobile",
                  "Verifica della documentazione disponibile",
                  "Sopralluogo e rilievo dello stato dei luoghi",
                  "Analisi delle possibili cause o del valore immobiliare",
                  "Predisposizione della relazione tecnica o valutazione",
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

            <section id="documenti" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                Documenti utili
              </h2>

              <p className="mb-6 leading-relaxed text-zinc-400">
                La documentazione necessaria può variare in base alla tipologia
                di perizia richiesta. In generale possono essere utili:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Visura catastale",
                  "Planimetria catastale",
                  "Atto di provenienza",
                  "Documentazione fotografica",
                  "Eventuali titoli edilizi",
                  "Documenti o comunicazioni relative al danno",
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

            <section id="faq" className="scroll-mt-32">
              <h2 className="mb-8 text-3xl font-light">
                Domande frequenti
              </h2>

              <div className="space-y-5">
                {[
                  {
                    q: "Posso richiedere una perizia per infiltrazioni?",
                    a: "Sì. In presenza di infiltrazioni, umidità o altri danni all’immobile è possibile effettuare un sopralluogo e predisporre una relazione tecnica finalizzata all’analisi delle possibili cause e degli interventi necessari.",
                  },
                  {
                    q: "La perizia può indicare da dove proviene il danno?",
                    a: "La perizia tecnica può contribuire a individuare le possibili cause del danno sulla base del sopralluogo, degli elementi riscontrati e della documentazione disponibile.",
                  },
                  {
                    q: "È possibile stimare il costo dei lavori di ripristino?",
                    a: "Sì, quando necessario è possibile effettuare una valutazione indicativa degli interventi necessari e dei relativi costi di ripristino.",
                  },
                  {
                    q: "Le perizie tecniche servono anche per stimare un immobile?",
                    a: "Sì. Le perizie tecniche possono riguardare anche valutazioni immobiliari per compravendite, successioni, divisioni patrimoniali o consulenze preliminari.",
                  },
                  {
                    q: "Serve un sopralluogo?",
                    a: "Il sopralluogo è generalmente consigliato perché consente di verificare direttamente lo stato dei luoghi e raccogliere gli elementi necessari per una valutazione più accurata.",
                  },
                  {
                    q: "Quanto costa una perizia tecnica?",
                    a: "Il costo varia in base alla tipologia di perizia, alla complessità del caso e alla documentazione disponibile. È possibile richiedere un preventivo personalizzato.",
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
                Hai bisogno di una perizia tecnica?
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
