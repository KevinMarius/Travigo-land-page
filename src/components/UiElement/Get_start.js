import React from 'react';
import globe from '../../assets/images/globe-terrestre.png';

export default function Get_start() {
  return (
    <div className=' bg-red-50 rounded-xl my-14 h-96 flex flex-col items-center justify-center p-10 md:p-32 text-center'>
        <h2 className='text-xl sm:text-4xl lg:text-5xl font-bold'>Prepare Yourself & Let's Explore The Beauty Of The World <img className='inline-block w-4 h-4' src={globe} alt='img'/></h2>
        <p className='text:sm sm:text-md text-gray-400 mt-8'>We have many special offers especially for you</p>
        <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-8">Get Started</button>
    </div>
  )
}
