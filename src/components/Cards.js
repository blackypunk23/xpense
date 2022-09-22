import React, { useState } from 'react';
// import data
import { product } from '../data';

const Cards = () => {
  const [index, setIndex] = useState(0);
  // destructure product
  const { cards } = product;
  return (
    <>
      {/* cards */}
      <div className='flex flex-col lg:flex-row lg:gap-x-[30px]'>
        {cards.map((card, cardIndex) => {
          // destructure card
          const { icon, title, subtitle } = card;
          return (
            // card
            <div
              onClick={() => setIndex(cardIndex)}
              className={`${
                index === cardIndex && 'bg-white shadow-2xl'
              }  w-[350px] h-[350px] flex flex-col justify-center items-center mx-auto p-[65px] text-center rounded-[12px] cursor-pointer transition-all`}
              key={cardIndex}
            >
              {/* card icon */}
              <div className='mb-6'>
                <img src={icon} alt='' />
              </div>
              {/* card title */}
              <div className='mb-3'>{title}</div>
              {/* card subtitle */}
              <p>{subtitle}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
