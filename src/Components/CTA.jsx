import React from 'react'
import { cta } from '../assets'

const CTA = () => {
  return (
    <section>
      <div className='max-w-7xl mx-auto relative'>
        <img src={cta} alt="CTA" className='w-full h-[400px] object-cover' />
        
        {/* Black overlay with opacity */}
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>

        {/* Text on top */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-2'>
          <h2 className='text-white lg:text-4xl text-xl font-bold'>Latest Diamond Rings</h2>
          <p className='text-white mb-6 max-w-2xl mx-auto lg:block hidden lg:text-xl'>
            Explore our exquisite collection of diamond rings, designed with precision and elegance to celebrate life's most cherished moments. Whether you're searching for the perfect engagement ring or a timeless gift, our latest styles offer unmatched brilliance, superior craftsmanship, and lasting beauty that will shine for generations.
          </p>
          <p className='text-white lg:text-xl lg:hidden block'>Discover the elegance and brilliance of our new collection.</p>
          <button className='bg-[#f8f3f0] p-3 lg:px-7 px-3 lg:text-xl font-medium'>Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default CTA
