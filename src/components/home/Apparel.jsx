export default function Apparel() {
  const products = [
    {
      name: "Denim Jacket",
      price: "$10.00",
      img: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
    {
      name: "Hoodie",
      price: "$12.00",
      img: "https://images.unsplash.com/photo-1520974735194-6c9c0c13ed3d",
    },
    {
      name: "T-Shirt",
      price: "$8.00",
      img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Our Apparels</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className="bg-white border rounded overflow-hidden">
              <img src={p.img} className="h-56 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.price}</p>
                <button className="mt-3 w-full bg-teal-500 text-white py-2 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
