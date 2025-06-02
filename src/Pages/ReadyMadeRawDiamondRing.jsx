import React from 'react';
import Header from '../Header';
import { ChevronDown } from 'lucide-react';
import DiamondRings from '../Components/DiamondRings';
import Accordions from '../Components/Accordions';
import Footer from '../Footer';

const ReadyMadeRawDiamondRing = () => {
    return (
        <section>
            <div>
                <Header />
            </div>

            <div className='max-w-7xl mx-auto lg:mt-28 mt-20'>
                <h1 className='lg:text-lg text-[#97877A] lg:p-0 p-5'>Home – Ready Made Raw Diamond Rings</h1>


                <div className='lg:flex lg:items-start lg:mt-10 justify-between lg:gap-28'>
                    <div className='lg:p-0 p-5'>
                        <h1 className='text-[#333333] lg:text-2xl text-lg font-semibold'>Shape</h1>
                        <p className='text-[#97877A] lg:text-xl text-base'>Rough Crystal</p>
                        <p className='text-[#97877A] lg:text-xl text-base'>Octahedron</p>
                        <p className='text-[#97877A] lg:text-xl text-base'>Dodecahedron</p>
                        <p className='text-[#97877A] lg:text-xl text-base'>Cube</p>
                        <p className='text-[#97877A] lg:text-xl text-base'>Triangle</p>
                        <p className='text-[#97877A] lg:text-xl text-base'>Round</p>
                        <p className='text-[#97877A] lg:text-xl text-base'>Melee</p>


                        <h1 className='text-[#333333] lg:text-2xl text-lg font-semibold mt-7'>Cart Size</h1>
                        <p className='text-[#97877A] lg:text-xl text-base'>Under .50 Carats</p>
                        <p className='text-[#97877A] lg:text-xl text-base'>.50 - 1.0 Carats</p>
                        <p className='text-[#97877A] lg:text-xl text-base'>Over 1.0 Carats</p>
                        <p className='text-[#97877A] lg:text-xl text-base'>Percel</p>
                    </div>

                    <div>
                        <div className='lg:p-0 p-5'>
                            <h1 className='text-[#333333] lg:text-3xl text-2xl font-semibold text-center'>Ready Made Raw Diamond Rings</h1>
                        <p className='text-[#333333] lg:text-xl font-semibold text-center'>Ready to ship raw diamond rings, please allow a few days if you need a resize.</p>
                        <p className='text-[#97877A] text-base text-center'>Begin your journey with our Raw Collection, featuring unpolished stones that reveal nature’s original artistry. For geometrically intriguing pieces, explore our Octahedrons and Dodecahedrons. If you prefer stones with naturally irregular shapes, our Freeform Collection (formerly “Crystals”) showcases a variety of freeform designs, while our Triangles Collection (formerly “Maccles”) presents unique triangular stones. Find options by weight in our Over 1.0 Carats, .50 Collection, or Under .50 Carats.</p>
                        <div className='flex items-center justify-between mt-5 lg:mt-10'>
                            <h1 className='text-[#97877A] lg:text-lg'>8 products</h1>
                            <h2 className='flex items-center justify-between gap-5 text-[#97877A] border-gray-300 border p-2'>Sort by <ChevronDown /></h2>
                        </div>
                        </div>

                        <div>
                            <DiamondRings />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-16'>
                <Footer />
            </div>
        </section>
    )
}

export default ReadyMadeRawDiamondRing;