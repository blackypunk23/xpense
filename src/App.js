import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
