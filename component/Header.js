import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function Header({currentPage}) {
  const [isAboutDivInView, setIsAboutDivInView] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const aboutDiv = document.querySelector('.about_div');
      if (aboutDiv) {
        const boundingRect = aboutDiv.getBoundingClientRect();
        setIsAboutDivInView(boundingRect.top <= window.innerHeight && boundingRect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerBackground = currentPage === 'whatwedo' ? (isAboutDivInView ? '#F4D4AE' : '#F9F9F9') : '#F9F9F9';
  const headerStyle = {
    backgroundColor: headerBackground,
    transition: 'background-color 0.5s ease' // Add a transition effect
  };

  return (
    <div className={`header div flex justify-between fixed top-0 w-full z-10`} style={headerStyle}>

      <Image className='logoImage' width='200' height='100' src='/lg.png' />
      <div className='flex mt-2 '>
        <div className='flex'>
          <div className={`nav_link_ `}>
            <div className='flex'>
              <p >About</p>
            </div>

          </div>
        </div>
        <p className='nav_link'>Services</p>
        <p className='nav_link'>Portfolio</p>
        <p className='nav_link'>Packages</p>
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
