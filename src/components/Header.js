import React from 'react';

// import data
import { header } from '../data';

const Header = () => {
  // destructure header data
  const { logo } = header;
  return (
    <header>
      <div className='container mx-auto'>header</div>
    </header>
  );
};

export default Header;
