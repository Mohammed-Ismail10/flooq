import React from 'react'
import MainButton from '../../button/page.jsx'
import AboutUsRightSide from './rightSide/page.jsx'
import AboutUsLeftSide from './leftSide/page.jsx'

export default function AboutUsPart({ gradient, image, sTitle, lTitle, description, alt }) {
  return (
    <>
      <section className={`${gradient} pt-36 from-[#27BBAD0A]`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            <AboutUsRightSide image={image} alt={alt} />

            <AboutUsLeftSide sTitle={sTitle} lTitle={lTitle} description={description} />

          </div>
        </div>
      </section>
    </>
  )
}
