import React, { useState } from 'react';
// import data
import { header } from '../data';
// import icons
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';
// import components
import MobileNav from '../components/MobileNav';

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  // destructure header data
  const { logo, btnText } = header;
  return (
    <header className='bg-dark/20 py-4 fixed top-0 lg:top-[60px] w-full'>
      <div className='container mx-auto flex justify-between'>
        {/* logo */}
        <a href='#'>
          <img src={logo} alt='' />
        </a>
        {/* mobile nav trigger btn / desktop hidden */}
        <button className='lg:hidden' onClick={() => setMobileNav(!mobileNav)}>
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
