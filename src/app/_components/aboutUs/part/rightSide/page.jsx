import Image from 'next/image.js'
import React from 'react'

export default function AboutUsRightSide({image, alt}) {
  return (
    <>
      <div>
        <div className='size-[300px] lg:size-[566px] rounded-full border border-[#27BBAD] overflow-hidden'>
          <Image className='w-full' src={image} alt={alt} />
        </div>
      </div>
    </>
  )
}
