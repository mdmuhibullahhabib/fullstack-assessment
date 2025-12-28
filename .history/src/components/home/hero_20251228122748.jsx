export default function Hero() {
  return (
    <section className="relative bg-black text-white max-h-[659px]">
      <img
        src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="relative max-w-7xl mx-auto px-4 py-28 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-sm uppercase mb-3 text-gray-700">
            Textile & Garments
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            High-Quality Garments. <br /> Ethically Made.
          </h1>
          <p className="text-gray-300 mb-6">
            We manufacture premium garments using ethical and sustainable
            practices.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#ee4b22] px-6 py-3 rounded">
              Contact Us
            </button>
            <button className="border px-6 py-3 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
