import Image from 'next/image.js'
import React from 'react'

export default function AsidePart({ image, altImage, title, date }) {
  return (
    <>
      <div className='flex items-center gap-6 border-b py-3'>
        <div>
          <Image className='w-full' src={image} alt={altImage} />
        </div>
        <div>
          <div className='mb-3'>
            <p className='text-[#323232] font-bold leading-7'>{title}</p>
          </div>
          <div>
            <span className='text-[#969696] text-sm' dir='ltr'>{date}</span>
          </div>
        </div>
      </div>
    </>
  )
}
