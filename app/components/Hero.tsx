import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <Image
          src="/images/logo.jpeg"
          alt="Atqon Industrial Services"
          width={96}
          height={96}
          className="object-contain mb-6"
          priority
        />

        <p className="text-amber-500 tracking-[0.3em] text-xs mb-4">
          ATQON INDUSTRIAL SERVICES
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
          Integrated Industrial &amp; Technical Services
        </h1>
        <p className="mt-6 text-slate-300 max-w-2xl text-lg">
          Delivering practical solutions across construction, engineering,
          maintenance, infrastructure, finishing and project support — with
          discipline, quality and safety at the core.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#services"
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-3 rounded"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="border border-white/30 hover:border-white px-6 py-3 rounded"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}