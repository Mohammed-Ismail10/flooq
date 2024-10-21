import React from 'react'
import rSide from '../../../../images/Pair programming-rafiki 1.png'
import AboutUsPart from '../part/page.jsx'

export default function AboutUsPart1() {
  return (
    <>
      {/* <section className={`bg-gradient-to-r pt-36 from-[#27BBAD0A]`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">





            <div>
              <div className='size-[566px] rounded-full border border-[#27BBAD]'>
                <Image className='w-full' src={rSide} alt='team developers' />
              </div>
            </div>






            <div className='pt-14'>
              <div className='mb-1'>
                <span className='text-[#F57568] font-bold'>عنا</span>
              </div>
              <div className='mb-7'>
                <h2 className='text-[#323232] text-[40px] font-bold'>عن فريقنا</h2>
              </div>
              <div className='mb-12'>
                <p className='text-[#969696] leading-7'>إذا كنت ترغب في تطوير هوية علامتك التجارية أو بناء موقع إلكتروني مميز ولا تعرف من أين تبدأ، نحن هنا لنرشدك. نقدم خدمة نصمم، نبرمج، أنت تطور لتلبي احتياجاتك كاملة. سواء كنت بحاجة إلى تصميم جرافيكي، تطوير موقع، أو تطبيق، فريقنا المتخصص سيقوم بذلك باحترافية. الخدمة متاحة الآن عبر الإنترنت أو بحجز موعد.</p>
              </div>
              <div>
                <MainButton text='تفاصيل اكثر' style='bg-[#f57568] text-white py-[18px] px-10' />
              </div>
            </div>






          </div>
        </div>
      </section> */}
      <AboutUsPart gradient={'bg-gradient-to-r'} image={rSide} alt={'فريق مبرمجين'} sTitle={'عنا'} lTitle={'عن فريقنا'} description={'إذا كنت ترغب في تطوير هوية علامتك التجارية أو بناء موقع إلكتروني مميز ولا تعرف من أين تبدأ، نحن هنا لنرشدك. نقدم خدمة نصمم، نبرمج، أنت تطور لتلبي احتياجاتك كاملة. سواء كنت بحاجة إلى تصميم جرافيكي، تطوير موقع، أو تطبيق، فريقنا المتخصص سيقوم بذلك باحترافية. الخدمة متاحة الآن عبر الإنترنت أو بحجز موعد.'}/>
    </>
  )
}
