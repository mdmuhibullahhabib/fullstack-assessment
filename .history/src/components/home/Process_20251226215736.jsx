export default function Process() {
  const steps = [
    "Dyeing",
    "Cutting",
    "Sewing",
    "Threading",
    "Ironing",
    "Packaging",
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="border rounded p-6 text-center hover:shadow"
            >
              <h3 className="font-semibold">{step}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Professional {step.toLowerCase()} process
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
