import React from 'react';

import { BiMap, BiSearch } from 'react-icons/bi';
import { MdOutlineKeyboardArrowDown, MdOutlineCalendarMonth } from 'react-icons/md';

import globe from '../../assets/images/globe-terrestre.png';
import fusee from '../../assets/images/fusee.png';
import hero from '../../assets/images/5e2d7ece86f4172502210903_hero-img.png';

export default function Hero_body() {
    return (
        <div className='grid grig-cols-1 md:grid-cols-2 my-6'>
            <div className='px-2'>
                <div className='flex bg-red-100 p-3 w-48 items-center gap-3 rounded-full'>
                    <h5 className='text-md text-red-400'>Explore the world </h5>
                    <img className='w-4 h-4' src={globe} alt='img'/>
                </div>
                <h2 className='text-3xl lg:text-5xl mt-8 font-extrabold'>It's The Big World Our There, Go Explore <img className='w-12 h-12 inline' src={fusee} alt='img2'/></h2>
                <p className='text-zinc-400 font-normal text-md my-6'>We always make our customer happy by providing as many choices as possible</p>
                <div className='relative flex flex-col lg:flex-row w-[100%] bg-white rounded-full py-0 lg:py-1 h-auto divide-y lg:divide-x lg:divide-y-0 pl-8 lg:pl-2 pr-20 lg:pr-12 shadow-zinc-200 shadow-lg'>
                    <div className='flex items-center gap-3 px-2 py-2 lg:py-4'>
                        <BiMap className=' text-red-400 w-6 h-5'/>
                        <div className=' text-sm'>
                            <p className='text-gray-400 flex items-center gap-1'>Location <MdOutlineKeyboardArrowDown /></p>
                            <h5 className='font-semibold text-sm text-gray-800'>Pontaniak, indonesia</h5>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 px-2 py-2 lg:py-4'>
                        <MdOutlineCalendarMonth className=' text-red-400 w-6 h-5'/>
                        <div className=' text-sm'>
                            <p className='text-gray-400 flex items-center gap-1'>Date <MdOutlineKeyboardArrowDown /></p>
                            <h5 className='font-semibold text-sm text-gray-800'>16 march 2009</h5>
                        </div>
                    </div>
                    <button type="submit" className="text-white absolute right-2 bottom-8 lg:right-3 lg:bottom-3 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><BiSearch className='w-6 h-6' /></button>
                </div>
            </div>
            <img className='mt-8' src={hero} alt='img1'/>
        </div>
    )
}
