import React, { useEffect, useState } from 'react';
// import data
import { header } from '../data';
// import icons
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';
// import components
import MobileNav from '../components/MobileNav';
import Nav from './Nav';

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isActive, setIsActive] = useState(false);
  // destructure header data
  const { logo, btnText } = header;
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[60px]'
      } py-6 lg:py-4 fixed w-full transition-all z-10`}
    >
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <a href='#' data-aos='fade-down' data-aos-delay='1000'>
          <img src={logo} alt='' />
        </a>
        {/* nav - initially hidden */}
        <div
          className='hidden lg:flex'
          data-aos='fade-down'
          data-aos-delay='1200'
        >
          <Nav />
        </div>
        {/* cta button - initially hidden */}
        <button
          className='btn btn-sm btn-outline hidden lg:flex'
          data-aos='fade-down'
          data-aos-delay='1400'
        >
          {btnText}
        </button>
        {/* mobile nav trigger btn / desktop hidden */}
        <button
          className='lg:hidden'
          onClick={() => setMobileNav(!mobileNav)}
          data-aos='fade-down'
          data-aos-delay='1400'
        >
          {mobileNav ? (
            <HiOutlineX className='text-3xl text-accent' />
          ) : (
            <HiMenuAlt4 className='text-3xl text-accent' />
          )}
        </button>
        {/*  mobile nav / desktop hidden  */}
        <div
          className={`${
            mobileNav ? 'left-0' : '-left-full'
          } fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
