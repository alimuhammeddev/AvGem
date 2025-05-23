import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
    {
        id: 1,
        name: 'Emily Carter',
        message:
            'The diamond ring I bought is stunning!\nThe craftsmanship is top-notch. This company truly delivers quality.',
    },
    {
        id: 2,
        name: 'Michael Lee',
        message:
            'Absolutely blown away by the sparkle and design of the ring.\nBest place to buy diamond rings, hands down!',
    },
    {
        id: 3,
        name: 'Sophia Williams',
        message:
            'My engagement ring is perfect.\nEveryone compliments it. I’m so glad I chose this company!',
    },
    {
        id: 4,
        name: 'Daniel Moore',
        message:
            'They offer the best diamond rings I’ve seen.\nGreat customer service and amazing quality.',
    },
    {
        id: 5,
        name: 'Olivia Brown',
        message:
            'I can’t stop staring at my ring!\nIt’s exactly what I dreamed of. Truly a premium experience.',
    },
    {
        id: 6,
        name: 'James Taylor',
        message:
            'From start to finish, the process was smooth and professional.\nThe diamond ring is breathtaking!',
    },
]

const Testimonial = () => {
    return (
        <section>
            <div className='bg-[#f8f3f0] mt-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='p-10'>
                        <h1 className='text-[#97877a] font-medium text-center'>OUR REVIEWS</h1>
                        <h2 className='lg:text-3xl text-[#97877a] text-xl font-semibold text-center mb-10'>
                            What our customers have to say...
                        </h2>

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            className="testimonial-swiper"
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className='p-8 rounded-2xl mx-auto text-center -mt-10'>
                                        <p className='lg:text-2xl text-lg text-gray-700 italic mb-4'>
                                            {testimonial.message.split('\n').map((line, index, array) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    {index !== array.length - 1 && (
                                                        <>
                                                            {/* Show <br /> on large screens and space on small */}
                                                            <span className="hidden lg:inline"><br /></span>
                                                            <span className="inline lg:hidden"> </span>
                                                        </>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </p>
                                        <h4 className='text-[#97877a] font-medium lg:text-lg'>
                                            — {testimonial.name}
                                        </h4><br />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial