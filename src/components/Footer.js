import React from 'react';
// import data
import { footer } from '../data';

const Footer = () => {
  // destructure footer
  const { logo, links, legal, newsletter } = footer;
  return (
    <footer className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center  lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8'>
          {/* logo */}
          <div>
            <img src={logo} alt='' />
          </div>
          {/* list 1 */}
          <div>
            <div className='text-2xl uppercase font-medium mb-6'>Links</div>
            <ul className='flex flex-col gap-y-3'>
              {links.map((link, index) => {
                // destructure link
                const { href, name } = link;
                return (
                  <li key={index}>
                    <a
                      className='font-medium hover:text-accent transition'
                      href={href}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/*  list 2 */}
          <div>
            <div className='text-2xl uppercase font-medium mb-6'>Legal</div>
            <ul className='flex flex-col gap-y-3'>
              {legal.map((item, index) => {
                // destructure link
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a
                      className='font-medium hover:text-accent transition'
                      href={href}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* newsletter */}
          <div>
            <div className='text-2xl uppercase font-medium mb-6'>
              {newsletter.title}
            </div>
            <div className='text-xl text-light mb-[18px]'>
              {newsletter.subtitle}
            </div>
            <form>
              <div className='bg-pink-50'>
                <input type='text' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
