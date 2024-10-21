'use client'
import React from 'react'

export default function MainButton({ text, style, click }) {
  return (
    <>
      <button onClick={click} className={`${style} font-bold rounded-3xl`}>{text}</button>
    </>
  )
}
