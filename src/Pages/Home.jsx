import { useState, useEffect } from 'react';
import Header from '../Header';
import { bg1, bg2 } from '../assets';

const Home = () => {
  const images = [bg1, bg2];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000); // change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Header */}
      <div className="z-10 relative">
        <Header />
      </div>

      {/* Background Image with Transition */}
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`w-full lg:h-[800px] h-[500px] object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? 'opacity-100' : 'opacity-100'
            }`}
          />
        ))}
      </div>

      {/* Text on the left side */}
      <div className="relative z-10 lg:h-[500px] h-[550px] flex items-center px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-white max-w-md">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Rough Diamond Rings</h1>
          <p className="text-lg lg:text-xl">
            Every Ring Custom Made  by hand to fit your unique style.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;