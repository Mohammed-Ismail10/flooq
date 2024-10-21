import Image from 'next/image.js'
import React from 'react'
import code1 from '../../../../images/Rectangle 723.png'
export default function OurProjectsPart4() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14'>

        <div className='grid grid-rows-11 gap-8'>
          <div className='row-span-5 rounded-3xl'>
            <Image className='size-full' src={code1} alt='code' />
          </div>
          <div className='row-span-6 rounded-3xl'>
            <Image className='size-full' src={code1} alt='code' />
          </div>
        </div>

        <div className='  grid grid-rows-11 gap-8'>
          <div className='row-span-6 rounded-3xl'>
            <Image className='size-full' src={code1} alt='code' />
          </div>
          <div className='row-span-5 rounded-3xl'>
            <Image className='size-full' src={code1} alt='code' />
          </div>
        </div>

        <div className='  grid grid-rows-11 gap-8'>
          <div className='row-span-5 rounded-3xl'>
            <Image className='size-full' src={code1} alt='code' />
          </div>
          <div className='row-span-6 rounded-3xl'>
            <Image className='size-full' src={code1} alt='code' />
          </div>
        </div>

      </div>
    </>
  )
}
