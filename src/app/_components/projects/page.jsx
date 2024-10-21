import React from 'react'
import OurProjectsPart1 from './part1/page.jsx'
import OurProjectsPart2 from './part2/page.jsx'
import OurProjectsPart3 from './part3/page.jsx'
import OurProjectsPart4 from './part4/page.jsx'
import OurProjectsPart5 from './part5/page.jsx'

export default function OurProjects() {
  return (
    <>
      <section className='bg-gradient-to-l from-[#27BBAD0A] pt-36'>
          <div className="container mx-auto text-center">
              <OurProjectsPart1 />
              <OurProjectsPart2 />
              <OurProjectsPart3 />
              <OurProjectsPart4 />
              <OurProjectsPart5 />
          </div>
      </section>
    </>
  )
}
