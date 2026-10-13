const pillars = [
  {
    title: "Engineering",
    text: "Technical coordination and practical project support.",
  },
  {
    title: "Execution",
    text: "Reliable site execution and workmanship.",
  },
  {
    title: "Quality",
    text: "Quality-focused delivery and attention to detail.",
  },
  {
    title: "Safety",
    text: "Safety-led work practices and responsible supervision.",
  },
];

export default function Pillars() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="bg-white p-6 rounded-lg border border-slate-200"
          >
            <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
            <p className="text-sm text-slate-600">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}