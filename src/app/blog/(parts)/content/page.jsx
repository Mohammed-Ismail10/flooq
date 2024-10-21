import Image from 'next/image.js'
import React from 'react'
import search from '../../../../images/Web search-pana 2.png'
import Link from 'next/link.js'

export default function BlogContent() {
  return (
    <>
      <div className='lg:w-3/4'>
        <div className='mb-4'>
          <span className='text-[#999999] text-lg leading-7' dir='ltr'>10 Oct 2021</span>
        </div>
        <div>
          <h4 className='text-[#323232] text-[20px] font-bold leading-9'>هل يستحق الاستثمار في موقع إلكتروني جديد؟</h4>
        </div>
        <div className='flex justify-center'>
          <div className='lg:size-[400px]'>
            <Image className='w-full' src={search} alt='' />
          </div>
        </div>
        <div className='mb-4'>
          <p className='text-[#969696] text-sm leading-6'>اكتشف كيف يمكن أن يساعدك الموقع الحديث في تعزيز تواجدك الرقمي. اكتشف كيف يمكن أن يساعدك الموقع الحديث في تعزيز تواجدك الرقمي. اكتشف كيف يمكن أن يساعدك الموقع الحديث في تعزيز تواجدك الرقمي.اكتشف كيف يمكن أن يساعدك الموقع الحديث في تعزيز تواجدك الرقمي.اكتشف كيف يمكن أن يساعدك الموقع الحديث في تعزيز تواجدك الرقمي.اكتشف كيف يمكن أن يساعدك الموقع الحديث في تعزيز تواجدك الرقمي.اكتشف كيف يمكن أن يساعدك الموقع الحديث في تعزيز تواجدك الرقمي.</p>
        </div>
        <div>
          <Link className='underline text-[#27BBAD] text-lg' href={''}>اقرأ اكثر</Link>
        </div>
      </div>
    </>
  )
}
