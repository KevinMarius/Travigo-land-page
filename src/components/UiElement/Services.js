import React from 'react';
import globe from '../../assets/images/globe-terrestre.png';
import sac from '../../assets/images/icons8-sac-vue-de-face-64.png';
import card from '../../assets/images/icons8-card-64.png';
import flamme from '../../assets/images/flamme.png';

export default function Services() {
  return (
    <div className='py-14'>
      <h5 className='text-md tracking-widest text-purple-500 uppercase font-bold'>What we serve</h5>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
        <div className=''>
          <h1 className='text-4xl font-extrabold text-gray-700'>Top Value For You <img src={flamme} className='w-8 h-8 inline-block' alt='img1'/></h1>
          <p className='mt-8 text-md text-gray-400 font-semibold'>Try a variety of benefits when using our services.</p>
        </div>
        <div className='p-4'>
          <img className='w-12 h-12' src={globe} alt='img2'/>
          <h3 className='text-2xl mt-2 font-bold text-slate-800'>Lot Of Choices</h3>
          <p className='text-md text-slate-500 mt-3'>Total 460+ destinations that we work with.</p>
        </div>
        <div className='p-4 md:mt-10'>
          <img className='w-12 h-12' src={sac} alt='img3'/>
          <h3 className='text-2xl mt-2 font-bold text-slate-800'>Best Tour Guide.</h3>
          <p className='text-md text-slate-500 mt-3'>Our tour guide with 15+ years of experience.</p>
        </div>
        <div className='p-4'>
          <img className='w-12 h-12' src={card} alt='img4'/>
          <h3 className='text-2xl mt-2 font-bold text-slate-800'>Easy Booking</h3>
          <p className='text-md text-slate-500 mt-3'>Whith an easy and fast ticket purchase process.</p>
        </div>
      </div>
    </div>
  )
}
