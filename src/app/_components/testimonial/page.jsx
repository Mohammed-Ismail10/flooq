import React from 'react'
import TestimonialPart1 from './part1/page.jsx'
import TestimonialPart2 from './part2/page.jsx'
import TestimonialPart3 from './part3/page.jsx'
import TestimonialPart4 from './part4/page.jsx'

export default function Testimonial() {
  return (
    <>
      <section className='bg-gradient-to-r from-[#27BBAD0A] pt-36'>
        <div className="w-[85%] mr-auto">
          <TestimonialPart1 />
          <TestimonialPart2 />
          <TestimonialPart3 />
          <TestimonialPart4 />
        </div>
      </section>
    </>
  )
}
