import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { bg1, bg2, d5, wd1 } from '../assets';
import DiamondRings from '../Components/DiamondRings';
import DiamondShip from '../Components/DiamondShip';
import RawDiamonds from '../Components/RawDiamonds';
import { Check } from 'lucide-react';
import BestSelling from '../Components/BestSelling';
import CTA from '../Components/CTA';
import Testimonial from '../Components/Testimonial';

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

      <div className='bg-[#97877a] mt-10 lg:p-0 p-0'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
            <img src={d5} alt="" className='w-full h-full'/>
            <div className='lg:space-y-3 space-y-2 lg:p-10 p-5'>
              <h1 className='lg:text-4xl text-base text-white font-medium lg:text-center'>Our Dedication to Ethics</h1>
              <p className='lg:text-xl text-sm lg:text-center text-white'>As an independently run company with a goal to improve the world, our stones are all ethically sourced, meaning:</p>
              <h1 className='text-white lg:text-xl flex items-center gap-3'><Check className='bg-white text-[#97877a] rounded-full p-1'/> No child labor</h1>
              <h1 className='text-white lg:text-xl flex items-center gap-3'><Check className='bg-white text-[#97877a] rounded-full p-1'/> No No slave labor</h1>
              <h1 className='text-white lg:text-xl flex items-center gap-3'><Check className='bg-white text-[#97877a] rounded-full p-1'/> No No mining in natural protected areas</h1>
              <h1 className='text-white lg:text-xl flex items-center gap-3'><Check className='bg-white text-[#97877a] rounded-full p-1'/> No Workers are protected and paid a living wage</h1>

              <p className='lg:text-xl text-sm lg:text-center text-white'>We believe that when you know where your ring comes from and who created it, you can wear it with peace of mind</p>
              <div className='flex justify-center'>
                <button className='bg-[#333333] text-white p-2 lg:px-5 px-3 rounded-sm lg:text-base text-sm'>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <BestSelling />
      </div>

      <div className='bg-[#f8f3f0] mt-10 lg:p-0'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 lg:items-center'>
            <img src={wd1} alt="" className='w-full h-full'/>
            <div className='lg:space-y-3 space-y-2 lg:p-10 p-5'>
              <h1 className='lg:text-4xl text-base text-[#97877a] font-medium lg:text-center'>Rough Diamond Rings</h1>
              <p className='lg:text-xl text-sm lg:text-center text-[#97877a]'>With a raw diamond, your ring will be the only one of its kind, ever. Every ring created is ethically sourced and completely unique, handcrafted by our micro team. You'll choose your exact ethically sourced center stone, then your ring design, and we'll create it for you. We provide free resizing and a lifetime limited warranty.</p>
              <div className='flex justify-center'>
                <button className='bg-[#97877a] text-white p-2 lg:px-5 px-3 rounded-sm lg:text-base text-sm'>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-20'>
        <CTA />
      </div>

      <div>
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
