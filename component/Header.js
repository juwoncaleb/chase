import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Header({ currentPage }) {
  const [isAboutDivInView, setIsAboutDivInView] = useState(true);
  const [menu, setMenu] = useState("one");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const aboutDiv = document.querySelector(".about_div");
      if (aboutDiv) {
        const boundingRect = aboutDiv.getBoundingClientRect();
        setIsAboutDivInView(
          boundingRect.top <= window.innerHeight && boundingRect.bottom >= 0
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let headerBackground;
  if (currentPage === "help") {
    headerBackground = "#A5DBEF"; // Dodge Blue color for the 'help' page
  } else if (currentPage === "whatwedo") {
    headerBackground = isAboutDivInView ? "#F4D4AE" : "#F9F9F9";
  } else {
    headerBackground = "#F9F9F9"; // Default Dodge Blue color for other pages
  }

  const headerStyle = {
    backgroundColor: headerBackground,
    transition: "background-color 0.5s ease", // Add a transition effect
  };

  return (
    <div>
      <div
        className={`header head_desktop div flex justify-between fixed top-0 w-full z-10`}
        style={headerStyle}
      >
        <Link href="./">
          <Image className="logoImage" width="200" height="100" src="/lg.png" />
        </Link>
        <div className="flex mt-2 ">
          <div className="flex">
            <div className={`nav_link_ `}>
              <Link href="./about">
                <div className="flex cursor-pointer">
                  <p>About</p>
                </div>
              </Link>
            </div>
          </div>
          <Link href="./portfolio">
            <p className="nav_link cursor-pointer">Portfolio</p>
          </Link>
          <Link href="./team">
            <p className="nav_link cursor-pointer">Team</p>
          </Link>
        </div>
        <Link href="./contact">
          <div className="flex justify-evenly">
            <button className="start_btn">Get Started</button>
          </div>
        </Link>
      </div>

      <div
        className={`header head_mob div flex justify-between fixed top-0 w-full z-10`}
        style={headerStyle}
      >
        <Link href="./">
          <Image className="logoImage" width="200" height="100" src="/lg.png" />
        </Link>
        {menu == 0 ? (
          <img
            onClick={() => {
              setMenu(1);
            }}
            className="bxg mt-2"
            width="25"
            height="28"
            src="https://img.icons8.com/fluency-systems-regular/48/x.png"
            alt="menu--v1"
          />
        ) : (
          <img
            onClick={() => {
              setMenu(0);
            }}
            width="25"
            className="bxg mt-2"
            height="20"
            src=" https://img.icons8.com/ios/50/menu--v1.png "
            alt="menu--v6"
          />
        )}
      </div>
      {menu === 0 && (
        <div         style={headerStyle}
        className="mt-16 miniii flex flex-col items-end">
          <Link href="./about">
            <p className="cursor-pointer menu_link">About</p>
          </Link>
          <Link href="./portfolio">
            <p className="cursor-pointer mt-2 menu_link">Portfolio</p>
          </Link>
          <Link href="./team">
            <p className="cursor-pointer mt-2 menu_link">Team</p>
          </Link>
          <Link href="./contact">
            <div className="mt-2">
              <button className="start_btn">Get Started</button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
