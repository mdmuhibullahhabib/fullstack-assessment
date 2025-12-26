export default function CustomProcess() {
  const steps = [
    {
      title: "Dyeing",
      desc: "Adding color to fabric with eco-friendly process",
    },
    {
      title: "Cutting",
      desc: "Perfect cutting according to measurements",
    },
    {
      title: "Sewing",
      desc: "High-quality stitching with skilled workers",
    },
    {
      title: "Threading",
      desc: "Strong threading for long durability",
    },
    {
      title: "Ironing",
      desc: "Finishing touch with modern ironing",
    },
    {
      title: "Packaging",
      desc: "Safe and attractive product packaging",
    },
  ];

  return (
    <section className="bg-[#eaf6f6] py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* ===== TOP CTA SECTION ===== */}
        <div className="bg-white rounded-xl shadow-sm p-8 grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Do You Want Custom Project With Textilery?
            </h2>
            <p className="text-gray-600 mb-6">
              We provide custom textile solutions with premium quality,
              sustainable production and on-time delivery.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded transition">
              Contact Now
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1593032457869-7d9795c6f3c3"
            alt="Custom Textile"
            className="rounded-lg w-full h-64 object-cover"
          />
        </div>

        {/* ===== PROCESS STEPS ===== */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border p-6 text-center hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
