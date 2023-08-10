import Image from 'next/image'
import React from 'react'
import Header from '@/component/Header';

export default function Team() {
  return (
    <div>
      <Header currentPage='help' />

      <div className='teams mt-14'>
        <center>
          <div className='about_head mr-4'>
            <p className='about_head_text'>
              <span className='ought'> Meet</span> the Team at 
            </p>
            <p  className='about_head_text lov'>C H A S E</p>
          </div>
        </center>
      </div>

    </div>
  )
}
