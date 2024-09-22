import React from 'react'

function Card(item) {
  return (
    <div className='shadow-lg max-w-[29vw] flex flex-col gap-4 py-5 px-3 rounded-xl m-1'>
      <div className='text-lg uppercase text-gray-500 font-semibold'>
        <p>{item.id}</p>
        <img src="" alt="" />
      </div>
      <div className='text-xl capitalize'>
        <h1>{item.title}</h1>
      </div>
      <div className='flex gap-3 capitalize text-gray-500 items-center'>
        <div className=' border py-1 px-2 rounded-lg'>
          <p className='bg-gray-700 text-white px-[10px] rounded-lg text-lg font-bold'>!</p>
        </div>
        <div className='flex gap-1 border py-1 px-4 rounded-lg text-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5" height="15" width="15" id="Circle">
            <defs>
              <clipPath id="a">
                <path d="M0 38h38V0H0v38Z" fill="" class="color000000 svgShape"></path>
              </clipPath>
            </defs>
            <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)" fill="#34a853" class="color000000 svgShape">
              <path fill="#4285f4" d="M36 19c0-9.389-7.611-17-17-17S2 9.611 2 19s7.611 17 17 17 17-7.611 17-17" class="color55acee svgShape"></path>
            </g>
          </svg>
          <h3 className='text-lg'>{item.tag}</h3>
        </div>
      </div>
    </div>
  )
}

export default Card
