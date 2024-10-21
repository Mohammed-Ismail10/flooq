import Link from 'next/link.js';
import React from 'react'
import { GoArrowLeft } from "react-icons/go";

export default function ServicesCard({Icon, title, description}) {
  return (
    <>
      <div className='rounded-3xl p-8 bg-white'>
        <div className='size-16 rounded-3xl bg-[#FFF5F1] flex justify-center items-center mb-5'>
          <Icon color='#FF854E' size={30} />
        </div>
        <div className='mb-5'>
          <h3 className='text-[#323232] text-xl font-bold'>{title}</h3>
        </div>
        <div className='mb-7'>
          <p className='text-[#969696] leading-7'>{description}</p>
        </div>
        <div className='flex items-center gap-0.5'>
          <Link className='underline text-[#F57568] font-bold' href={''}>اطلب الخدمة</Link>
          <GoArrowLeft color='#F57568' size={24}/>
        </div>
      </div>
    </>
  )
}
