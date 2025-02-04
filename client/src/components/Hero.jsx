import React from 'react';
import home_main from '../assets/images/home_main.png';

const Hero = () => {
  return (
    <div className='hero'>

      <div className='container'>
        <div className="welcome">
          <h1>
            Karyeranıza doğru ilk addımı atın!
          </h1>

        </div>
        <div className="welcome-img">
          <img src={home_main} alt="welcome" width={650} />
        </div>
      </div>

    </div>
  );
};

export default Hero;