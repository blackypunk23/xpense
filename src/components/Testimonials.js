import React from 'react';
// import data
import { testimonials } from '../data';
// import components
import ClientSlider from './ClientSlider';

const Testimonials = () => {
  // destructure testimonials
  const { title, clients } = testimonials;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        {/* title */}
        <h2 className='title'>{title}</h2>
        {/* client slider */}
        <ClientSlider clients={clients} />
      </div>
    </section>
  );
};

export default Testimonials;
