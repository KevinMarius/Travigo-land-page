import React from 'react';
import rainbow from '../../assets/images/icons8-rainbow-48.png';
import happy from '../../assets/images/undraw_happy_news_re_tsbd.svg';

export default function Experience() {
    return (
        <div className='flex flex-col md:flex-row pb-20'>
            <img className='w-[70%] md:w-[55%] m-auto' src={happy} alt='img1'/>
            <div className='p-3'>
                <h5 className='text-md tracking-widest text-purple-500 uppercase font-bold'>Our Experience</h5>
                <h1 className='text-4xl font-extrabold text-gray-700 mt-4'>With Our Experience We Will Serve You <img src={rainbow} className='w-8 h-8 inline-block' alt='img'/></h1>
                <p className='mt-8 text-md text-gray-400 font-semibold'>Since we first opened we have always prioritized the convenience of our users by providing low prices and with a easy process.</p>
                <div className='flex mt-6'>
                    <div className='p-2'>
                        <h1 className='text-4xl text-purple-600 font-extrabold'>20</h1>
                        <p className='text-md text-slate-600 font-medium mt-3'>Years Experience</p>
                    </div>
                    <div className='p-2'>
                        <h1 className='text-4xl text-purple-600 font-extrabold'>460+</h1>
                        <p className='text-md text-slate-600 font-medium mt-3'>Destination Collaboration</p>
                    </div>
                    <div className='p-2'>
                        <h1 className='text-4xl text-purple-600 font-extrabold'>50k+</h1>
                        <p className='text-md text-slate-600 font-medium mt-3'>Happy Customer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
