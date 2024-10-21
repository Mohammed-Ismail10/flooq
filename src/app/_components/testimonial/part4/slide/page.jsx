import Image from 'next/image.js';
import React from 'react'
import { FaStar } from "react-icons/fa";
import { DM_Sans } from 'next/font/google'
const dmSans = DM_Sans({
  subsets: ['latin'],
});


export default function Slide({ image, altImage, comment, name, job, rating }) {
  return (
    <>
      <div className='bg-white relative rounded-3xl px-7'>
        <div className='size-16 rounded-full absolute bg-black top-0 -translate-y-1/2'>
          <Image src={image} alt={altImage} />
        </div>

        <div className='py-14 border-b border-[#F2F2F2] '>
          <p className='leading-7 text-[#969696]'>{comment}</p>
        </div>

        <div className='flex flex-wrap justify-between items-end pt-6 pb-8'>
          <div>
            <div className='mb-1'>
              <h4 className='text-[#323232] font-bold'>{name}</h4>
            </div>
            <div>
              <p className='text-[#969696]'>{job}</p>
            </div>
          </div>
          <div className='flex items-center gap-2.5'>
            <div>
              <span className={`${dmSans.className} text-[#969696] text-sm`}>{rating}</span>
            </div>
            <div className='flex gap-1.5'>
              <FaStar size={16} color='#F57568' />
              <FaStar size={16} color='#F57568' />
              <FaStar size={16} color='#F57568' />
              <FaStar size={16} color='#F57568' />
              <FaStar size={16} color='#F57568' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
