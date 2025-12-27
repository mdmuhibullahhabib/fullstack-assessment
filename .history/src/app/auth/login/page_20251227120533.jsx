import React from 'react';

const TrustedLogos = () => {
  // Using high-quality SVG logos to match the visual fidelity of the image
  const logos = [
    {
      name: 'Amazon Pay',
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Amazon_Pay_logo.svg',
      height: 'h-6'
    },
    {
      name: 'Asana',
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg',
      height: 'h-7'
    },
    {
      name: 'Alipay',
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Alipay_logo.svg',
      height: 'h-10' // This logo is visually larger in your image
    },
    {
      name: 'Amazon Drive',
      src: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Amazon_Drive_logo.svg',
      height: 'h-8'
    },
    {
      name: 'Asana Secondary',
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg',
      height: 'h-7'
    }
  ];

  return (
    <div className="w-full bg-white py-12 flex items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-12 md:gap-20 px-6">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center">
            <img
              src={logo.src}
              alt={logo.name}
              className={`${logo.height} w-auto object-contain filter brightness-100 contrast-100 transition-opacity hover:opacity-80`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedLogos;