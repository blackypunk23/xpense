import React from 'react';

// import aos
import Aos from 'aos';
// import aos css
import 'aos/dist/aos.css';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Brands from './components/Brands';
import Feature1 from './components/Feature1';

const App = () => {
  // initialize aos
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div>
      <Header />
      <Hero />
      <Overview />
      <Brands />
      <Feature1 />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
