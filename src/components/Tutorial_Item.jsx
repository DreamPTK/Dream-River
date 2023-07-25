import React from 'react'

const Tutorial_Item = ({img, title, link}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]
    cursor-pointer hover:scale-110 ease-in duration-200'>
        <img src={img} alt="/"  className=' rounded-xl group-hover:opacity-10'/>
        <div className=' hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className=' text-sm pt-5 pl-1 pr-1 font-bold text-white tracking-wider text-center'>
                {title}
            </h3>
            
            <a href={link}>
                <p className=' text-center mt-10 p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm'>More Info</p>
            </a>



        </div>
    </div>
  )
}

export default Tutorial_Item