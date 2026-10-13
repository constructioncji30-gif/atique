const services = [
  "Architectural Design & Consultancy",
  "Fire Fighting Systems",
  "Engineering & Construction",
  "Warehouses & Industrial Buildings",
  "Electrical Wiring & Low Current Works",
  "Industrial Projects & Temporary Facilities",
  "Operational & Technical Support Services",
  "Building Maintenance",
  "Civil & Structural Works",
  "Asphalt & Paving Works",
  "Ducting & HVAC Support",
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-amber-600 tracking-widest text-xs mb-2">
          CAPABILITIES
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div
              key={s}
              className="group p-6 rounded-lg border border-slate-200 hover:border-amber-500 hover:bg-amber-50 transition"
            >
              <p className="text-xs text-slate-400 mb-2">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-semibold text-slate-900">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}