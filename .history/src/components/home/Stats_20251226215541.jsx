export default function StatsSection() {
  const stats = [
    { title: "Quality Product", value: "100%" },
    { title: "Project Overview", value: "35 Million" },
  ];

  return (
    <section className="bg-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <h3 className="text-2xl font-bold">{s.value}</h3>
            <p className="text-sm">{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
