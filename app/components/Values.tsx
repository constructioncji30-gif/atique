const values = [
  { title: "Safety First", text: "Protect people, assets and the environment." },
  { title: "Teamwork", text: "Collaborate across disciplines." },
  { title: "Quality", text: "Meet requirements and client expectations." },
  { title: "Integrity", text: "Operate with honesty and accountability." },
  { title: "Customer Focus", text: "Listen, respond and build relationships." },
  { title: "Continuous Improvement", text: "Learn and improve project delivery." },
];

export default function Values() {
  return (
    <section id="values" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-amber-600 tracking-widest text-xs mb-2">HOW WE WORK</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Core Values
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white p-6 rounded-lg border border-slate-200"
            >
              <h3 className="font-bold text-slate-900 mb-1">{v.title}</h3>
              <p className="text-sm text-slate-600">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}