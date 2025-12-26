export default function Blog() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Latest Blogs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white p-5 border rounded">
              <h3 className="font-semibold mb-2">
                Blog Title {i}
              </h3>
              <p className="text-sm text-gray-600">
                Short blog description here.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
