import Image from 'next/image.js'
import React from 'react'
import webSearch from '../../../../images/Web search-pana 1.png'
import webSearch2 from '../../../../images/Web search-pana 2.png'
import AsidePart from './asidePart/page.jsx'

export default function ArticlesPart4() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4'>
        <aside className='lg:w-5/6'>
          <AsidePart image={webSearch} altImage='web search' title='هل يستحق الاستثمار في موقع ألكتروني جديد؟' date='19 Apr 2021' />
          <AsidePart image={webSearch} altImage='web search' title='هل يستحق الاستثمار في موقع ألكتروني جديد؟' date='19 Apr 2021' />
          <AsidePart image={webSearch} altImage='web search' title='هل يستحق الاستثمار في موقع ألكتروني جديد؟' date='19 Apr 2021' />
        </aside>






        <div>
          <div className='flex justify-center'>
            <Image src={webSearch2} alt='web search' />
          </div>
          <div className='mb-3'>
            <h3 className='text-[#323232] text-xl font-bold leading-9'>هل يستحق الاستثمار في موقع إلكتروني جديد؟</h3>
          </div>
          <div>
            <p className='text-[#969696] leading-6 text-sm'>اكتشف كيف يمكن أن يساعدك الموقع الحديث في تعزيز تواجدك الرقمي.</p>
          </div>
        </div>
        <div>
          <div className='flex justify-center'>
            <Image src={webSearch2} alt='web search' />
          </div>
          <div className='mb-3'>
            <h3 className='text-[#323232] text-xl font-bold leading-9'>هل يستحق الاستثمار في موقع إلكتروني جديد؟</h3>
          </div>
          <div>
            <p className='text-[#969696] leading-6 text-sm'>اكتشف كيف يمكن أن يساعدك الموقع الحديث في تعزيز تواجدك الرقمي.</p>
          </div>
        </div>

        
      </div>
    </>
  )
}
