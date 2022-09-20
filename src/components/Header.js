import React from 'react';

// import data
import { header } from '../data';

const Header = () => {
  // destructure header data
  const { logo, btnText } = header;
  return (
    <header>
      <div className='container mx-auto'>
        {/* logo */}
        <a href='#'>
          <img src={logo} alt='' />
        </a>
      </div>
    </header>
  );
};

export default Header;
