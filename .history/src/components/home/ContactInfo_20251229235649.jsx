import { MapPin, Mail } from 'lucide-react';

export default function ContactInfo() {
  const contacts = [
    {
      icon: <MapPin className="w-10 h-10 text-teal-500" />,
      title: "Location",
      value: "Kashimpur, Gazipur Sadar / Gazipur",
    },
    {
      icon: <Mail className="w-10 h-10 text-teal-500" />,
      title: "Email",
      value: "compliance@danysknitwear.com",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-12 justify-center">
        {contacts.map((item, i) => (
          <div key={i} className="flex items-start sm:items-center gap-4 w-full sm:w-[45%] md:w-[40%]">
            <div className="flex-shrink-0">{item.icon}</div>
            <div className="flex flex-col">
              <h3 className="text-teal-500 font-bold text-lg leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
