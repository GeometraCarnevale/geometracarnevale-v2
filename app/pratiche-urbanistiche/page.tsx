import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Pratiche Urbanistiche Roma | Geom. Leonardo Carnevale",
  description:
    "Pratiche urbanistiche a Roma e provincia. CILA, SCIA, sanatorie edilizie, condoni, occupazione suolo pubblico e cambio destinazione d'uso.",
};

export default function PraticheUrbanistichePage() {
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
            <Link href="/">Home</Link>
            <Link href="/#chi-sono">Chi sono</Link>
            <Link href="/#servizi">Servizi</Link>
            <Link href="/#contatti">Contatti</Link>
          </nav>
        </div>
      </header>

      <section className="border-b border-white/10 px-6 pb-20 pt-40">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Servizi
          </p>

          <h1 className="mb-8 text-4xl font-extralight leading-tight md:text-6xl">
            Pratiche Urbanistiche
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
            Assistenza tecnica per pratiche urbanistiche a Roma e provincia.
            Supporto per CILA, SCIA, sanatorie edilizie, condoni, occupazione
            suolo pubblico e pratiche connesse agli interventi edilizi.
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
                <a className="block hover:text-white" href="#cila">
                  CILA
                </a>
                <a className="block hover:text-white" href="#scia">
                  SCIA
                </a>
                <a className="block hover:text-white" href="#sanatorie">
                  Sanatorie e Condoni
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
                Cosa sono le pratiche urbanistiche
              </h2>

              <p className="leading-relaxed text-zinc-400">
                Le pratiche urbanistiche sono gli adempimenti necessari per
                eseguire interventi edilizi nel rispetto della normativa
                vigente. A seconda della tipologia dei lavori può essere
                necessario presentare una comunicazione o una segnalazione agli
                uffici competenti.
              </p>
            </section>

            <section id="quando-servono" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                Quando servono
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Ristrutturazioni interne",
                  "Modifiche della distribuzione degli spazi",
                  "Interventi edilizi",
                  "Cambio destinazione d'uso",
                  "Regolarizzazione di opere esistenti",
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
                  "CILA",
                  "SCIA",
                  "Sanatorie edilizie",
                  "Condoni edilizi",
                  "Cambio destinazione d'uso",
                  "Occupazione Suolo Pubblico (OSP)",
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

            <section id="cila" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">CILA</h2>

              <p className="leading-relaxed text-zinc-400">
                La Comunicazione di Inizio Lavori Asseverata è necessaria per
                numerosi interventi di manutenzione straordinaria e modifiche
                interne degli immobili che non coinvolgono elementi strutturali.
              </p>
            </section>

            <section id="scia" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">SCIA</h2>

              <p className="leading-relaxed text-zinc-400">
                La Segnalazione Certificata di Inizio Attività consente
                l'avvio di specifici interventi edilizi e attività soggette
                alla normativa vigente.
              </p>
            </section>

            <section id="sanatorie" className="scroll-mt-32">
              <h2 className="mb-6 text-3xl font-light">
                Sanatorie e Condoni
              </h2>

              <p className="leading-relaxed text-zinc-400">
                Assistenza nella verifica della regolarità urbanistica
                dell'immobile e nella predisposizione delle pratiche previste
                dalla normativa applicabile.
              </p>
            </section>

            <section id="faq" className="scroll-mt-32">
              <h2 className="mb-8 text-3xl font-light">
                Domande frequenti
              </h2>

              <div className="space-y-5">
                {[
                  {
                    q: "Quando serve una CILA?",
                    a: "Per molti interventi di manutenzione straordinaria che non coinvolgono parti strutturali.",
                  },
                  {
                    q: "Quando serve una SCIA?",
                    a: "Per specifici interventi edilizi previsti dalla normativa vigente.",
                  },
                  {
                    q: "È possibile regolarizzare opere già eseguite?",
                    a: "Dipende dalla situazione dell'immobile e dalla normativa applicabile. È necessaria una verifica preliminare.",
                  },
                  {
                    q: "Quanto costa una pratica urbanistica?",
                    a: "Il costo varia in base alla tipologia di pratica e alla complessità dell'intervento.",
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
                Hai bisogno di una pratica urbanistica?
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
