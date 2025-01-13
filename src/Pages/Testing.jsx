import React, { useState } from 'react'
import FAQData from '../Data/FAQ'
const Testing = () => {
    const [currentId,SetCurrentId]=useState(0)
    const myCleanedData = FAQData.filter((item)=>item.id===currentId)
    console.log(myCleanedData)
  return (
    <div className='w-full bg-slate-500 pt-44'>
      {
        FAQData.map((item,index)=>(
            <div className="" key={index}>
                <h1 onClick={(e)=>SetCurrentId(index+1)}>{item.title}</h1> <br />
            </div>
        ))
      }
      <hr />
      {myCleanedData.map((item) => (
          <h2 key={item.id} className="text-white text-lg">
            {item.title}
          </h2>
        ))}
        
      
    </div>
  )
}

export default Testing
