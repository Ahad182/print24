import React, { useState } from 'react'
import Marquee from 'react-fast-marquee';
import TrandSetData from '../../Data/TrandSet';


const TrandSet = () => {
    const [playVideo,SetPlayVide] = useState(false)
    const hanclePlay = (e)=>{
        SetPlayVide(true)
    }

    const handleLeave = (e)=>{
        SetPlayVide(false)
    }
  return (
    <div className='w-full mt-10 md:mt-24'>
      <div className="w-[90%]  mx-auto ">
        <h1 className="text-center font-bold text-3xl md:text-7xl  md:leading-[60px] mb-5">
        Set the Trends
        </h1>
        <div className='w-[100%] md:w-[70%] mx-auto'>
        <p className='text-justify md:text-center text-2xl font-medium text-gray-600 '>Indeed, you are just a call away from us. Hence, you set the new trends of packaging products with us. Because we think “Beautiful”. We think “Revolutionary”. For You!</p>
        </div>
        
      </div>
      <div className="marque-container w-full mt-16 " >
        <Marquee speed={50} gradient={false}  pauseOnClick pauseOnHover>
          <div className="flex items-center w-full " >
            {TrandSetData.map((item, index) => {
              return (
                <div key={index}  className="relative w-[300px] md:w-[300px] h-[500px]  ml-3  rounded-3xl outline-none overflow-hidden" onMouseEnter={hanclePlay} onMouseLeave={handleLeave}>
                  
                  
                    <div className=' h-full '>
                        <img src={item.img} className={` h-full w-full  `} />
                    </div>

                    <div className="z-50 text-red-950 absolute">
                        <video src=""></video>
                    </div>
                  
                  
                </div>
              );
            })}

           
          </div>
        </Marquee>

      </div>
    </div>
  )
}

export default TrandSet
