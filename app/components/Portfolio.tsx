import React from 'react';

export default function Portfolio() {
  const images = [
    '/projects/bags.jpeg',
    '/projects/real_estate.jpeg',
    '/projects/gym.jpeg',
    '/projects/startup.jpeg',
    '/projects/shoes.jpeg',
    '/projects/port.jpeg',

    '/projects/bags.jpeg',
    '/projects/real_estate.jpeg',
    '/projects/gym.jpeg',
    '/projects/startup.jpeg',
    '/projects/shoes.jpeg',
    '/projects/port.jpeg',

    '/projects/bags.jpeg',
    '/projects/real_estate.jpeg',
    '/projects/gym.jpeg',
    '/projects/startup.jpeg',
    '/projects/shoes.jpeg',
    '/projects/port.jpeg',

    '/projects/bags.jpeg',
    '/projects/real_estate.jpeg',
    '/projects/gym.jpeg',
    '/projects/startup.jpeg',
    '/projects/shoes.jpeg',
    '/projects/port.jpeg'
  ];

  return (
    <section
      id="portfolio"
      className="bg-white py-24 px-6 text-center text-black"
    >
      <h2 className="text-4xl font-bold text-orange-500">
        Behind the Development
      </h2>
      <p className="text-6xl font-bold text-black mt-10 ">
        Curious What Else I’ve <br /> Created?
      </p>

      {/* Infinite Loop Carousel */}
      <div className="relative overflow-hidden mt-10 mb-12">
        <div className="animate-scroll">
          {/* First set */}
          {images.map((src, index) => (
            <div
              key={`first-${index}`}
              className="w-64 h-96 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition flex-shrink-0"
            >
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Duplicate set for seamless looping */}
          {images.map((src, index) => (
            <div
              key={`second-${index}`}
              className="w-64 h-96 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition flex-shrink-0"
            >
              <img
                src={src}
                alt={`Project duplicate ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <a
        href="#"
        className="inline-block bg-[#FF6B35] hover:bg-[#FF8555] text-white px-6 py-3 rounded-full font-semibold  transition"
      >
        See more Projects
      </a>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-lg text-black">
        <div> <span className="text-orange-500 font-bold">#01</span> <br /> Strategy & Planning</div>
        <div> <span className="text-orange-500 font-bold">#02</span> <br /> Design & Development</div>
        <div> <span className="text-orange-500 font-bold">#03</span> <br /> Launch & Growth</div>
        <div> <span className="text-orange-500 font-bold">#04</span> <br /> Ongoing Support</div>
      </div>
    </section>
  );
}
