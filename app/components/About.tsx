export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-amber-600 tracking-widest text-xs mb-2">
            COMPANY OVERVIEW
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Dependable project delivery, built on discipline.
          </h2>
        </div>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            Atqon Industrial Services is a multidisciplinary industrial and
            technical services company delivering integrated solutions across
            construction, engineering, maintenance, infrastructure, finishing
            and project support.
          </p>
          <p>
            Our approach combines practical site execution with disciplined
            planning, quality control and a strong commitment to safety.
          </p>
          <p>
            We value long-term relationships and aim to earn trust through
            consistent performance, transparent communication and attention to
            detail.
          </p>
        </div>
      </div>
    </section>
  );
}