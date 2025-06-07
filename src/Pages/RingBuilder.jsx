import React from 'react'
import Header from '../Header'

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
    <div class="mt-2 text-center text-sm">Step One</div>
    <div class="absolute top-5 left-1/2 w-full h-0.5 bg-blue-300 -z-0"></div>
  </div>

  
  <div class="flex flex-col items-center flex-1 relative">
    <div class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold z-10">2</div>
    <div class="mt-2 text-center text-sm">Step Two</div>
    <div class="absolute top-5 left-0 lg:w-[500px] w-[100px] h-0.5 bg-blue-300 -z-0"></div>
  </div>

  
  <div class="flex flex-col items-center flex-1 relative">
    <div class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold z-10">3</div>
    <div class="mt-2 text-center text-sm">Step Three</div>
    <div class="absolute top-5 left-0 lg:w-[450px] w-[120px] h-0.5 bg-blue-300 -z-0"></div>
  </div>

 
  <div class="flex flex-col items-center flex-1 relative">
    <div class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold z-10">4</div>
    <div class="mt-2 text-center text-sm">Step Four</div>
  </div>
</div>

                </div>
            </div>

            <div></div>
        </section>
    )
}

export default RingBuilder