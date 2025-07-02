import React, { useState, useEffect } from 'react'
import Link from "next/link";

export default function Footer() {
  const images = ['https://ik.imagekit.io/juwoncaleb/ho3_g8S4ENWCL.webp?updatedAt=1693945103456', 'https://ik.imagekit.io/juwoncaleb/ho1_yCoYqt0JQ.webp?updatedAt=1693945103515', 'https://ik.imagekit.io/juwoncaleb/ho2_7g2qslYlW.webp?updatedAt=1693945103567'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the currentImageIndex to the next image in the array
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='end flex justify-around'>
        <div className='End_note'>
          <p>Everything you need to grow your
          </p>
          <p>  Interior Design Studio.</p>
          <Link href='./contact'>
             <button className='start_now'>
            Talk to Us
          </button>
          </Link>
       
        </div>
        <div>
          <img src={images[currentImageIndex]} />
        </div>
      </div>
      <div className='footer bg-black'>
        <hr className='footer_line' />
        <div className='flex lowe_footer justify-around mt-10 '>
          <p className='mt-6'>Copyright CHASE</p>
          <div className='flex mt-6 '>
            <img className='footer_icon' width="25" height="25" src="https://img.icons8.com/ios/50/EBEBEB/instagram-new--v1.png" alt="instagram-new--v1" />
            <img className='footer_icon' width="25" height="25" src="https://img.icons8.com/ios-filled/50/EBEBEB/twitter.png" alt="twitter" />
            <img className='footer_icon' width="25" height="25" src="https://img.icons8.com/ios/50/EBEBEB/facebook-new.png" alt="facebook-new" />
            <img className='footer_icon' width="25" height="25" src="https://img.icons8.com/ios-filled/50/EBEBEB/behance.png" alt="behance" />
          </div>
        </div>
      </div>
    </div>
  )
}
