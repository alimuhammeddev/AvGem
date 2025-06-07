import React from 'react'
import Header from '../Header'
import { cutdiamond, roughdiamonds, sapphire, tanzanite } from '../assets'
import { ArrowRight } from 'lucide-react'
import RingBuilderAccordion from '../Components/RingBuilderAccordion'
import Footer from '../Footer'

const RingBuilder = () => {
    return (
        <section>
            <div>
                <Header />
            </div>

            <div className='max-w-7xl mx-auto mt-20 lg:p-0 p-2'>
                <div>
                    <h1 className='lg:text-3xl text-center font-semibold'>Your Custom Ring</h1>
                    <div class="flex items-center justify-between px-4 py-8 space-x-2 sm:space-x-4">

                        <div class="flex flex-col items-center flex-1 relative">
                            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold z-10">1</div>
                            <div class="mt-2 text-center text-sm">Choose your stone type</div>
                            <div class="absolute top-5 left-1/2 w-full h-0.5 bg-blue-300 -z-0"></div>
                        </div>


                        <div class="flex flex-col items-center flex-1 relative">
                            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold z-10">2</div>
                            <div class="mt-2 text-center text-sm">Select your center stone</div>
                            <div class="absolute top-5 left-0 lg:w-[500px] w-[100px] h-0.5 bg-blue-300 -z-0"></div>
                        </div>


                        <div class="flex flex-col items-center flex-1 relative">
                            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold z-10">3</div>
                            <div class="mt-2 text-center text-sm">Select your ring setting</div>
                            <div class="absolute top-5 left-0 lg:w-[450px] w-[120px] h-0.5 bg-blue-300 -z-0"></div>
                        </div>


                        <div class="flex flex-col items-center flex-1 relative">
                            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold z-10">4</div>
                            <div class="mt-2 text-center text-sm">Your custom ring is ready!</div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='lg:text-3xl text-center font-semibold text-[#3333333]'>Choose Your Center Stone Type</h1>
                </div>
            </div>

            <div className='max-w-7xl mx-auto lg:mt-10 lg:p-0 p-5'>
                <div className='grid lg:grid-cols-4 grid-cols-1 gap-5'>
                    <div className="flex flex-col items-center h-full p-5 border rounded-lg hover:shadow-xl transition-shadow duration-700">
                        <div className="h-60 flex items-center justify-center">
                            <img src={roughdiamonds} alt="" className='max-h-full object-contain' />
                        </div>
                        <h1 className='text-[#333333] lg:text-3xl font-medium text-center mt-5'>Rough Diamonds</h1>
                        <p className='text-[#97877A] lg:text-xl text-center mb-5 mt-3'>
                            Select one of our ethical rough diamonds as your ring’s center stone. Next, we’ll help you choose the perfect setting.
                        </p>
                        <button className='bg-[#97877A] text-white p-3 flex items-center gap-2 mx-auto text-sm'>
                            SELECT YOUR ROUGH DIAMOND <ArrowRight size={20} />
                        </button>
                    </div>

                    <div className="flex flex-col items-center h-full p-5 border rounded-lg hover:shadow-xl transition-shadow duration-700">
                        <div className="h-60 flex items-center justify-center">
                            <img src={sapphire} alt="" className='max-h-full object-contain' />
                        </div>
                        <h1 className='text-[#333333] lg:text-3xl font-medium text-center mt-5'>Sapphires</h1>
                        <p className='text-[#97877A] lg:text-xl text-center mb-5 mt-3'>
                            Pick from our collection of artisanally mined sapphires to create your ring. Then, move on to select your setting.
                        </p>
                        <button className='bg-[#97877A] text-white p-3 flex items-center gap-2 mx-auto text-sm'>
                            SELECT YOUR ROUGH SAPPHIRE <ArrowRight size={20} />
                        </button>
                    </div>

                    <div className="flex flex-col items-center h-full p-5 border rounded-lg hover:shadow-xl transition-shadow duration-700">
                        <div className="h-60 flex items-center justify-center">
                            <img src={cutdiamond} alt="" className='max-h-full object-contain' />
                        </div>
                        <h1 className='text-[#333333] lg:text-3xl font-medium text-center mt-5'>Cut Diamonds</h1>
                        <p className='text-[#97877A] lg:text-xl text-center mb-5 mt-3'>
                            Choose a natural or lab-created cut diamond to complete your ring. After that, you’ll select a setting to match.
                        </p>
                        <button className='bg-[#97877A] text-white p-3 flex items-center gap-2 mx-auto text-sm'>
                            SELECT YOUR CUT DIAMOND <ArrowRight size={20} />
                        </button>
                    </div>

                    <div className="flex flex-col items-center h-full p-5 border rounded-lg hover:shadow-xl transition-shadow duration-700">
                        <div className="h-60 flex items-center justify-center">
                            <img src={tanzanite} alt="" className='max-h-full object-contain' />
                        </div>
                        <h1 className='text-[#333333] lg:text-3xl font-medium text-center mt-5'>Tanzanites</h1>
                        <p className='text-[#97877A] lg:text-xl text-center mb-5 mt-3'>
                            Select a Tanzanite from our curated collection sourced through the Tanzania Association of Women Miners.
                        </p>
                        <button className='bg-[#97877A] text-white p-3 flex items-center gap-2 mx-auto text-sm'>
                            SELECT YOUR TANZANITE <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className='mb-10'>
                    <RingBuilderAccordion />
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </section>
    )
}

export default RingBuilder