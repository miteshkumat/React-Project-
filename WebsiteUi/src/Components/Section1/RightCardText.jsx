import React from 'react'

const RightCardText = (props) => {
  // console.log(props);
  
  return (
    <div> <div className='absolute top-0 left-0 h-full w-full p-8 flex justify-between flex-col'>
            <h2 className='bg-white rounded-full h-10 w-10 flex items-center justify-center text-xl'>{props.id + 1}</h2>
            <div>
                <p className='text-base leading-normal text-white mb-10'>{props.intro}</p>
                <div>
                    <button className='bg-[#4a6dfe] text-white font-medium px-8 py-1 rounded-full'>{props.tag}</button>
                    <button className='bg-[#4a6dfe] text-white font-medium px-4 py-1 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div></div>
  )
}

export default RightCardText