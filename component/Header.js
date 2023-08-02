import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='header div flex justify-between  '>
      <Image width='200' height='100' src='/logo.png' />
      <div className='flex mt-2 '>
        <p className='nav_link'>About</p>
         <p className='nav_link'>Services</p>
         <p className='nav_link'>Portfolio</p>
         <p className='nav_link'>Pricing</p>
         <p className='nav_link'>Team</p>
      </div>
      <div className='flex justify-evenly'>
       
        <button className='start_btn'>
         Get Started
        </button>
      </div>
    </div>
  )
}
