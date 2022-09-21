import React from 'react';

// import data
import { overview } from '../data';

const Overview = () => {
  // destructure overview data
  const { productImg } = overview;
  return (
    <section className='min-h-[400] lg:min-h-[712px] bg-overview bg-no-repeat bg-cover bg-left-top pt-[30px] lg:pt-[87px]'>
      <div className='container mx-auto flex justify-end'>
        <img src={productImg} alt='' />
      </div>
    </section>
  );
};

export default Overview;
