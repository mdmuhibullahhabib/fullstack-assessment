import React from 'react';

const LogoMarquee = () => {
  const logos = [
    { name: 'Amazon Pay', url: 'https://logo.clearbit.com/amazon.com' },
    { name: 'Asana', url: 'https://logo.clearbit.com/asana.com' },
    { name: 'Alipay', url: 'https://logo.clearbit.com/alipay.com' },
    { name: 'Amazon Drive', url: 'https://logo.clearbit.com/amazon.com' },
    { name: 'Asana Secondary', url: 'https://logo.clearbit.com/asana.com' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;