import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { bg1, bg2 } from '../assets';
import DiamondRings from '../Components/DiamondRings';
import DiamondShip from '../Components/DiamondShip';
import RawDiamonds from '../Components/RawDiamonds';

const Home = () => {
  const images = [
    {
      img: bg1,
      title: 'ROUGH DIAMOND RINGS',
      description:
        'Explore our exquisite collection of rough diamond rings, each piece a unique masterpiece that tells its own story.',
    },
    {
      img: bg2,
      title: 'CUSTOM ENGAMENT RINGS',
      description:
        'Craft your love story with our custom engagement rings, designed to reflect your unique bond and style.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative w-full h-[500px] lg:h-screen overflow-hidden">
        {/* Header */}
        <div className="z-10 relative">
          <Header />
        </div>

        {/* Background Images */}
        <div className="absolute top-0 left-0 w-full h-full">
          {images.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt=""
              className={`w-full lg:h-full h-[500px] object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}

          {/* Dark Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0" />
        </div>

        {/* Text on the left side */}
        <div className="relative z-0 lg:h-full h-[500px] flex items-center lg:p-0 p-5 max-w-7xl mx-auto">
          <div className="text-white max-w-2xl transition-opacity duration-1000 ease-in-out">
            <h1 className="text-4xl lg:text-7xl font-bold mb-4">
              {images[currentIndex].title}
            </h1>
            <p className="text-xl lg:text-4xl">
              {images[currentIndex].description}
            </p>
          </div>
        </div>
      </section>

      {/* Move this OUTSIDE the section */}
      <div className="bg-[#97877a] text-white p-8 text-center">
        <h1 className="text-base lg:text-4xl font-semibold mb-2">
          CRAFTED WITH CARE, WORN WITH PURPOSE
        </h1>
        <p className="text-sm lg:text-lg mx-auto">
          We create timeless, ethical jewelry with intention and heart. From concept to creation, you'll collaborate directly with your designer every step of the way. Start your bespoke journey here.
        </p>
      </div>

      <div>
        <DiamondRings />
      </div>

      <div>
        <DiamondShip />
      </div>

      <div>
        <RawDiamonds />
      </div>
    </>
  );
};

export default Home;
