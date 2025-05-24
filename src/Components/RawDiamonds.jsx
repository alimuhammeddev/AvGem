import React from 'react'
import { rd1, rd2, rd3, rd4, rd5, rd6, rd7, rd8 } from '../assets'

const RawDiamonds = () => {
    return (
        <section>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-[#97877a] lg:text-4xl text-xl font-medium mt-10 text-center'>Loose Raw Diamonds</h1>
            </div>

            <div className='max-w-7xl mx-auto lg:mt-10 mt-5 lg:p-0 p-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div className="group block overflow-hidden">
                        <div className="relative h-[350px] sm:h-[450px]">
                            <img
                                src={rd1}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                            />

                            <img
                                src={rd2}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                            />
                        </div>

                        <div className="relative bg-white pt-3">
                            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                Raw Diamond
                            </h3>

                            <p className="mt-1.5 tracking-wide text-gray-900">$199.99</p>
                        </div>
                    </div>
                    <div className="group block overflow-hidden">
                        <div className="relative h-[350px] sm:h-[450px]">
                            <img
                                src={rd3}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                            />

                            <img
                                src={rd4}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                            />
                        </div>

                        <div className="relative bg-white pt-3">
                            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                Raw Diamond
                            </h3>

                            <p className="mt-1.5 tracking-wide text-gray-900">$219.99</p>
                        </div>
                    </div>
                    <div className="group block overflow-hidden">
                        <div className="relative h-[350px] sm:h-[450px]">
                            <img
                                src={rd5}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                            />

                            <img
                                src={rd6}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                            />
                        </div>

                        <div className="relative bg-white pt-3">
                            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                Raw Diamond
                            </h3>

                            <p className="mt-1.5 tracking-wide text-gray-900">$359.99</p>
                        </div>
                    </div>
                    <div className="group block overflow-hidden">
                        <div className="relative h-[350px] sm:h-[450px]">
                            <img
                                src={rd7}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                            />

                            <img
                                src={rd8}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                            />
                        </div>

                        <div className="relative bg-white pt-3">
                            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                Raw Diamond
                            </h3>

                            <p className="mt-1.5 tracking-wide text-gray-900">$229.99</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RawDiamonds