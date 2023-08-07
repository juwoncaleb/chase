import React from 'react'
import Image from 'next/image'

export default function HowWeWork() {
  return (
    <div className='mt-20'>
      <center>
        <Image className='we_img mt-20' width='500' height='600' src='/how.png' />

      </center>
      <div className='div'>
        <div className=' div_men'>
          <div className='we_div'>
            <p>
              <span className='ought'> Partners</span> in your sucess. Dedicated to crafting powerful brands through websites, that builds Trust, good first Impression and improve efficeny in your Business
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
