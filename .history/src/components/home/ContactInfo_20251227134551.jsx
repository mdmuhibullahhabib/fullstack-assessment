import { MapPin, Mail, ArrowRight } from 'lucide-react';

export default function Contac() {
  const contacts = [
    {
      icon: <MapPin className="w-6 h-6 text-teal-500" />,
      title: "Location",
      value: "Kashimpur, Gazipur Sadar / Gazipur",
    },
    {
      icon: <Mail className="w-6 h-6 text-teal-500" />,
      title: "Email",
      value: "compliance@danysknitwear.com",
    },
  ];

  const boxes = [
    {
      title: "Quality Product",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      bgColor: "bg-[#FF4D30]", // Vibrant Red/Orange
      isLargeTitle: false,
    },
    {
      title: "Project Overview",
      value: "35 Millions",
      bgColor: "bg-teal-500", // Teal
      isLargeTitle: true,
    },
  ];

  return (
    <section className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-10">
          {contacts.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="flex flex-col">
                <h3 className="text-teal-500 font-bold text-sm uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Boxes Container */}
      <div className="flex flex-col md:flex-row w-full min-h-[250px] text-white">
        {boxes.map((box, i) => (
          <div 
            key={i} 
            className={`${box.bgColor} flex-1 p-10 flex flex-col justify-center transition-opacity hover:opacity-90`}
          >
            <h2 className="text-2xl font-bold mb-4">{box.title}</h2>
            
            {box.isLargeTitle ? (
              <p className="text-4xl md:text-5xl font-extrabold mb-6">
                {box.value}
              </p>
            ) : (
              <p className="text-white/90 mb-6 max-w-sm leading-relaxed">
                {box.desc}
              </p>
            )}

            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest group">
              Read More 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}