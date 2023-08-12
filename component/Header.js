import Image from 'next/image'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

export default function Header({ currentPage }) {
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

  let headerBackground;
  if (currentPage === 'help') {
    headerBackground = '#A5DBEF'; // Dodge Blue color for the 'help' page
  } else if (currentPage === 'whatwedo') {
    headerBackground = isAboutDivInView ? '#F4D4AE' : '#F9F9F9';
  } else {
    headerBackground = '#F9F9F9'; // Default Dodge Blue color for other pages
  }

  const headerStyle = {
    backgroundColor: headerBackground,
    transition: 'background-color 0.5s ease', // Add a transition effect
  };


  return (
    <div className={`header div flex justify-between fixed top-0 w-full z-10`} style={headerStyle}>

      <Image className='logoImage' width='200' height='100' src='/lg.png' />
      <div className='flex mt-2 '>
        <div className='flex'>
          <div className={`nav_link_ `}>
            <Link href='./about'>
              <div className='flex cursor-pointer'>
                <p >About</p>
              </div>
            </Link>

          </div>
        </div>
        <p className='nav_link'>Portfolio</p>
        <Link href='./team'>
          <p className='nav_link'>Team</p>

        </Link>
      </div>
      <Link href='./contact'>
        <div className='flex justify-evenly'>
          <button className='start_btn'>
            Get Started
          </button>
        </div></Link>
    </div>
  )
}
