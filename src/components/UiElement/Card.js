import React from 'react';

import { FaStar } from 'react-icons/fa';
import kawe from '../../assets/images/kawe-rodrigues-z5k8HD82g9c-unsplash (1).jpg';

export default function Card() {
  return (
    <React.Fragment>
      <div className=' w-64'>
        <img className=' w-[100%] rounded-3xl' src={kawe} alt='img' />
        <div className='absolute bg-white top-4 right-5 rounded-full'>
          <h3 className='text-purple-400 text-xl font-extrabold py-2 px-4'>$450</h3>
        </div>
        <h2 className='text-slate-700 text-2xl font-semibold mt-6 hover:text-purple-300 duration-200'><a href='#'>Enjoy the beauty of rialto Bridge</a></h2>
        <p className='text-md text-slate-400 py-3'>Venezia, Italy</p>
        <div className='flex items-center gap-3'>
          <div className='text-md bg-amber-100 flex gap-2 items-center py-1 px-2 rounded-full'>
            <FaStar className=' text-yellow-300' />
            <p className='text-slate-400'>4.8</p>
          </div>
          <p className='text-slate-400 text-sm'>(24k Reviews)</p>
        </div>
      </div>
    </React.Fragment>
  )
}
