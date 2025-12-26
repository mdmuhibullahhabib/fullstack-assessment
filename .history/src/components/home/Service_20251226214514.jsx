export default function ServiceSection() {
  const services = [
    { title: "Fast Delivery", desc: "Quick & safe delivery" },
    { title: "Secure Payment", desc: "100% secure payment" },
    { title: "Quality Products", desc: "Best quality ensured" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">

        {services.map((s, i) => (
          <div key={i} className="border rounded p-6 text-center">
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
