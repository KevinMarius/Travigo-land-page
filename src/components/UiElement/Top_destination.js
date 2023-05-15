import React from 'react';
import Caroussel from './Caroussel';
import avion from '../../assets/images/avion.png';

export default function Top_destination() {
  return (
    <div className='relative'>
        <div className='grid'>
          <div>
            <h5 className='text-sm sm:text-md uppercase text-purple-500 font-semibold tracking-widest'>Top destination</h5>
            <h1 className='text-xl sm:text-5xl w-[50%] sm:w-[70%] text-gray-700'>Explore Top Destination <img className='w-8 h inline-block' src={avion} alt='img'/></h1>
          </div>
          
        </div>
        <Caroussel />
    </div>
  )
}
