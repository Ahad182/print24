import React, { useState } from 'react'

const MyButton = ({title,bgColor,icon}) => {
    const [onHover , setOnHover] = useState(false)
    
  return (
    <div onMouseEnter={()=>setOnHover(true)} onMouseLeave={()=>setOnHover(false)} className={`${bgColor} py-1 px-5 rounded-full flex items-center  justify-between gap-3 hover:bg-black  transition-all duration-[1s] ease-in-out`}>
        <div className={` ${onHover?"text-white":"text-black"}`}>{title}</div>
        <div className='overflow-x-hidden'>
        <div className={`${bgColor} p-2 overflow-x-hidden  rounded-full ${onHover ? "translate-x-0 ":"translate-x-12 invisible"} transition-all duration-700 ease-in-out`}>
            {icon}
        </div>
        </div>
        
    </div>
  )
}

export default MyButton
