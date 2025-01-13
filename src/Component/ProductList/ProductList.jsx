import React from 'react'
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./ProductList.css"

import { Navigation } from "swiper/modules"
const ProductList = () => {
    return (
        <div className='w-full   overflow-hidden mt-16'>
            <h1 className='text-3xl md:text-5xl text-center font-bold'>Let’s Adorn Your Brand</h1>
            <div className="px-10 md:px-20 w-full h-full mt-10">
                <Swiper navigation={true} modules={[Navigation]} loop="true" className="mySwiper" spaceBetween={30} breakpoints={{
                        // Adjust number of slides for different screen sizes
                        320: { // For mobile devices
                            slidesPerView: 1,
                        },
                        768: { // For medium screens (tablets)
                            slidesPerView: 2,
                        },
                        1024: { // For larger screens (default)
                            slidesPerView: 3,
                        },
                    }}>
                    <SwiperSlide>
                        <div className='w-[350px] overflow-hidden rounded-3xl'>
                            <div className='overflow-hidden'><img src="../../src/assets/images/bags/ess1.webp" alt="" className='hover:scale-110 transition-all duration-500 ease-in-out' /></div>

                            <div className="flex items-center gap-9 mt-4 px-5">
                                <h3 className='text-xl font-bold'>Folding Cartons</h3>
                                <img src="../../src/assets/images/arr_home.png" alt="img" className='w-7 h-7 text-gray-300 ' />
                            </div>
                            <div className="px-5 my-4 font-semibold text-gray-600">
                                Our packaging company prints and produces folding cartons of cardboard, Kraft, corrugated, and rigid materials. Get them today!
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[350px] overflow-hidden rounded-3xl'>
                            <div className='overflow-hidden '><img src="../../src/assets/images/bags/ess2.webp" alt="" className='hover:scale-110 transition-all duration-500 ease-in-out' /></div>
                            <div className="flex items-center gap-9 mt-4 px-5">
                                <h3 className='text-xl font-bold'>Folding Cartons</h3>
                                <img src="../../src/assets/images/arr_home.png" alt="img" className='w-7 h-7 text-gray-300' />
                            </div>
                            <div className="px-5 my-4 font-semibold text-gray-600">
                                Our packaging company prints and produces folding cartons of cardboard, Kraft, corrugated, and rigid materials. Get them today!
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[350px] overflow-hidden rounded-3xl'>
                            <div className='overflow-hidden '><img src="../../src/assets/images/bags/ess3.webp" alt="" className='hover:scale-110 transition-all duration-500 ease-in-out' /></div>
                            <div className="flex items-center gap-9 mt-4 px-5">
                                <h3 className='text-xl font-bold'>Folding Cartons</h3>
                                <img src="../../src/assets/images/arr_home.png" alt="img" className='w-7 h-7 text-gray-300' />
                            </div>
                            <div className="px-5 my-4 font-semibold text-gray-600">
                                Our packaging company prints and produces folding cartons of cardboard, Kraft, corrugated, and rigid materials. Get them today!
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[350px] overflow-hidden rounded-3xl'>
                            <div className='overflow-hidden '><img src="../../src/assets/images/bags/ess4.webp" alt="" className='hover:scale-110 transition-all duration-500 ease-in-out' /></div>
                            <div className="flex items-center gap-9 mt-4 px-5">
                                <h3 className='text-xl font-bold'>Folding Cartons</h3>
                                <img src="../../src/assets/images/arr_home.png" alt="img" className='w-7 h-7 text-gray-300' />
                            </div>
                            <div className="px-5 my-4 font-semibold text-gray-600">
                                Our packaging company prints and produces folding cartons of cardboard, Kraft, corrugated, and rigid materials. Get them today!
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[350px] overflow-hidden rounded-3xl'>
                            <div className='overflow-hidden '><img src="../../src/assets/images/bags/ess7.webp" alt="" className='hover:scale-110 transition-all duration-500 ease-in-out' /></div>
                            <div className="flex items-center gap-9 mt-4 px-5">
                                <h3 className='text-xl font-bold'>Folding Cartons</h3>
                                <img src="../../src/assets/images/arr_home.png" alt="img" className='w-7 h-7 text-gray-300' />
                            </div>
                            <div className="px-5 my-4 font-semibold text-gray-600">
                                Our packaging company prints and produces folding cartons of cardboard, Kraft, corrugated, and rigid materials. Get them today!
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>

        </div>
    )
}

export default ProductList
