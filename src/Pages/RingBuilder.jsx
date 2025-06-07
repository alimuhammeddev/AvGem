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
                    <div className="relative flex justify-center items-center lg:gap-12 mt-10">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center relative">
                            <div className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center text-lg font-semibold z-10">
                                1
                            </div>
                            <p className="mt-2 text-center text-blue-400">Choose your stone type</p>
                        </div>

                        {/* Line between 1 and 2 */}
                        <div className="lg:w-64 w-20 h-[1px] bg-blue-400 absolute top-5 lg:mr-96 mr-56 z-0"></div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center relative">
                            <div className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center text-lg font-semibold z-10">
                                2
                            </div>
                            <p className="mt-2 text-center text-blue-400">Select your center stone</p>
                        </div>

                        {/* Line between 2 and 3 */}
                        <div className="lg:w-60 w-24 h-[1px] bg-blue-400 absolute lg:mr-20 ml-40  top-5 z-0"></div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center relative">
                            <div className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center text-lg font-semibold z-10">
                                3
                            </div>
                            <p className="mt-2 text-center text-blue-400">Select your ring setting</p>
                        </div>

                        {/* Line between 3 and 4 */}
                        <div className="lg:w-56 w-20 h-[1px] bg-blue-400 absolute top-5 lg:ml-96 z-0"></div>

                        {/* Step 4 */}
                        <div className="flex flex-col items-center relative">
                            <div className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center text-lg font-semibold z-10">
                                4
                            </div>
                            <p className="mt-2 text-center text-blue-400">Your custom ring concept is ready!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div></div>
        </section>
    )
}

export default RingBuilder