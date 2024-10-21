import Image from 'next/image.js'
import React from 'react'
import search from '../../../../images/Web search-pana 1.png'
export default function BlogSidebar() {
  return (
    <>
      <aside className='flex flex-col gap-8'>
        <div className='flex items-center gap-7'>
          <div>
            <Image className='w-full' src={search} alt='web search' />
          </div>
          <div>
            <div className='mb-3'>
              <h5 className='text-[#323232] font-bold text-lg leading-[30px]'>هل يستحق الاستثمار في موقع ألكتروني جديد؟</h5>
            </div>
            <div>
              <span className='text-[#969696]' dir='ltr'>19 Apr 2021</span>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-7'>
          <div>
            <Image className='w-full' src={search} alt='web search' />
          </div>
          <div>
            <div className='mb-3'>
              <h5 className='text-[#323232] font-bold text-lg leading-[30px]'>هل يستحق الاستثمار في موقع ألكتروني جديد؟</h5>
            </div>
            <div>
              <span className='text-[#969696]' dir='ltr'>19 Apr 2021</span>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-7'>
          <div>
            <Image className='w-full' src={search} alt='web search' />
          </div>
          <div>
            <div className='mb-3'>
              <h5 className='text-[#323232] font-bold text-lg leading-[30px]'>هل يستحق الاستثمار في موقع ألكتروني جديد؟</h5>
            </div>
            <div>
              <span className='text-[#969696]' dir='ltr'>19 Apr 2021</span>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-7'>
          <div>
            <Image className='w-full' src={search} alt='web search' />
          </div>
          <div>
            <div className='mb-3'>
              <h5 className='text-[#323232] font-bold text-lg leading-[30px]'>هل يستحق الاستثمار في موقع ألكتروني جديد؟</h5>
            </div>
            <div>
              <span className='text-[#969696]' dir='ltr'>19 Apr 2021</span>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-7'>
          <div>
            <Image className='w-full' src={search} alt='web search' />
          </div>
          <div>
            <div className='mb-3'>
              <h5 className='text-[#323232] font-bold text-lg leading-[30px]'>هل يستحق الاستثمار في موقع ألكتروني جديد؟</h5>
            </div>
            <div>
              <span className='text-[#969696]' dir='ltr'>19 Apr 2021</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
