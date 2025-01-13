import React from 'react'

const WhyChooseCard = ({title,bg,para,pic}) => {
    return (
        <div className={`card text-center md:h-[450px] overflow-hidden p-6  flex flex-row md:flex-col  items-center justify-between gap-16 md:gap-0  ${bg} rounded-3xl `}>
            <h3 className='text-xl font-bold  '>{title}</h3>
            <p className='text-gray-700 text-sm hidden md:block'>{para}</p>
            <img src={pic} alt="" className='w-28 md:w-full -order-1 md:order-3'/>
        </div>
    )
}

export default WhyChooseCard
