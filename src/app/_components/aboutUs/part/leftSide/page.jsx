import MainButton from '@/app/_components/button/page.jsx'
import React from 'react'

export default function AboutUsLeftSide({ sTitle, lTitle, description }) {
  return (
    <>
      <div className='pt-14'>
        <div className='mb-1'>
          <span className='text-[#F57568] font-bold'>{sTitle}</span>
        </div>
        <div className='mb-7'>
          <h2 className='text-[#323232] text-[40px] font-bold'>{lTitle}</h2>
        </div>
        <div className='mb-12'>
          <p className='text-[#969696] leading-7'>{description}</p>
        </div>
        <div>
          <MainButton text='تفاصيل اكثر' style='bg-[#f57568] text-white py-[18px] px-10' />
        </div>
      </div>
    </>
  )
}
