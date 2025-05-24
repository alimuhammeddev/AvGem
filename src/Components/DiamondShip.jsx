import React from 'react'
import { d1, d2, d3, d4, h1, h2, h3, h4 } from '../assets'

const DiamondShip = () => {
    return (
        <section className='bg-[#f8f3f0] lg:p-5 lg:mt-16 mt-5'> <br />
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-[#97877a] lg:text-4xl text-xl font-medium mt-10 text-center'>Ready-to-Ship One-of-a-Kind Pieces</h1>
            </div>

            <div className='max-w-7xl mx-auto lg:mt-10 mt-5 lg:p-0 p-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div className="group block overflow-hidden">
                        <div className="relative h-[350px] sm:h-[450px]">
                            <img
                                src={d2}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                            />

                            <img
                                src={d1}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                            />
                        </div>

                        <div className="relative bg-white pt-3 p-2">
                            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                Limited Edition Diamond Ring
                            </h3>

                            <p className="mt-1.5 tracking-wide text-gray-900">$489.99</p>
                        </div>
                    </div>
                    <div className="group block overflow-hidden">
                        <div className="relative h-[350px] sm:h-[450px]">
                            <img
                                src={h1}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                            />

                            <img
                                src={h2}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                            />
                        </div>

                        <div className="relative bg-white pt-3 p-2">
                            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                Limited Edition Diamond Ring
                            </h3>

                            <p className="mt-1.5 tracking-wide text-gray-900">$119.99</p>
                        </div>
                    </div>
                    <div className="group block overflow-hidden">
                        <div className="relative h-[350px] sm:h-[450px]">
                            <img
                                src={h4}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                            />

                            <img
                                src={h3}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                            />
                        </div>

                        <div className="relative bg-white pt-3 p-2">
                            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                Limited Edition Diamond Ring
                            </h3>

                            <p className="mt-1.5 tracking-wide text-gray-900">$89.99</p>
                        </div>
                    </div>
                    <div className="group block overflow-hidden">
                        <div className="relative h-[350px] sm:h-[450px]">
                            <img
                                src={d4}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                            />

                            <img
                                src={d3}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                            />
                        </div>

                        <div className="relative bg-white pt-3 p-2">
                            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                Limited Edition Diamond Ring
                            </h3>

                            <p className="mt-1.5 tracking-wide text-gray-900">$179.99</p>
                        </div>
                    </div><br /><br />
                </div>
            </div>
        </section>
    )
}

export default DiamondShip