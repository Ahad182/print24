import React from 'react'

const EmailSubscribe = () => {
  return (
    <div className='w-full mt-10 md:mt-20  bg-gray-200 py-10'>
        <div className="w-[80%] mx-auto bg-red flex  flex-col md:flex-row gap-5 items-center justify-start md:justify-between" >
            <h1 className='font-bold text-xl md:text-3xl w-full md:w-[50%] flex flex-col gap-1 text-gray-700'> Skyrocket Your Brand Impact and <span>Sales With Us</span> </h1>
            <div className="email-container border w-[100%] md:w-[40%] relative ">
                <form action="" className='w-full flex  h-16 overflow-hidden rounded-3xl border-2 border-black'>
                    <input type="search" name="subscribe" placeholder='Enter Your Email' id="" className='w-[80%] h-full py-3 px-4 outline-none '/>
                    <input type="submit" value="Subscribe" className=' w-[30%] placeholder:font-semibold text-white font-bold bg-blue-500  absolute -right-4 md:-right-6 top-0 h-full rounded-full' />
                </form>
                
            </div>
        </div>
      
    </div>
  )
}

export default EmailSubscribe
