import { MapPin, Mail } from 'lucide-react';

export default function ContactInfo() {
  const contacts = [
    {
      icon: <MapPin className="w-8 h-8 text-teal-500" />,
      title: "Location",
      value: "Kashimpur, Gazipur Sadar / Gazipur",
    },
    {
      icon: <Mail className="w-8 h-8 text-teal-500" />,
      title: "Email",
      value: "compliance@danysknitwear.com",
    },
  ];

  return (
    <section className="bg-white ml-6 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-12">
        {contacts.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            {/* Icon Container */}
            <div className="flex-shrink-0">
              {item.icon}
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col">
              <h3 className="text-teal-500 font-bold text-lg leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm font-medium">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}