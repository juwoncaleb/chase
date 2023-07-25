import Image from 'next/image'
import React from 'react'

export default function LandingPage() {
    return (
        <div className='div mt-8'>
            <div className='flex justify-between top_imag'>
                <Image className='top_image' width='300' height='300' src='/h10.jpg' />

                <Image className='family' width='300' height='200' src='/h1.jpeg' />

            </div>
            <p className='hero_text ml-10'>BUILDING REPUTABLE BRAND FOR IMPORTANT REAL ESTATE BUSINESS</p>
            <div className='flex justify-around bt_img'>
                <Image className='flat' width='300' height='300' src='/nu.jpg' />
                <Image className='hh' width='290' height='200' src='/sold.jpg' />
            </div>
            hjk
        </div>

    )
}
