import React from 'react'
import ServicesPart1 from './part1/page.jsx'
import ServicesPart2 from './part2/page.jsx'
import ServicesPart3 from './part3/page.jsx'
import ServicesPart4 from './part4/page.jsx'

export default function Services() {
  return (
    <>
      <section className='bg-gradient-to-l from-[#27BBAD0A] pt-36'>
        <div className="container mx-auto">
          <ServicesPart1 />
          <ServicesPart2 />
          <ServicesPart3 />
          <ServicesPart4 />
        </div>
      </section>
    </>
  )
}
