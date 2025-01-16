import React from 'react'
import MyButton from './Button'
import { FaArrowRightLong } from "react-icons/fa6";
import heroImage from "../../assets/images/hero1.webp"

const Hero = () => {
  return (
    <div className={` hero w-full h-dvh overflow-x-hidden flex items-center px-6 md:px-20`} style={{backgroundImage: `url(${heroImage})` }}>
            <div className="hero-content flex flex-col justify-center w-full md:w-[50%] mt-24">
                <h1 className='font-bold text-3xl md:text-5xl text-white'>Product Packaging <br />
                at its Peak</h1>

                <p className='text-white my-3 md:text-xl font-sans font-semibold'>We Empower Small Business Owners, Luxury Retail Stores, and All-Inclusive Industries with Custom Packaging Solutions.</p>

                <div className='flex flex-col md:flex-row md:items-center gap-6 w-full mt-7'>
                <MyButton title="MyLar Bags" bgColor="bg-white font-bold " icon={<FaArrowRightLong className='m-3' />}/>
                <MyButton title="Custom Lables" bgColor="bg-white font-bold" icon={<FaArrowRightLong className='m-3' />}/>
                </div>

            </div>
    </div>
  )
}

export default Hero
