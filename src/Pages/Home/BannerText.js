import React from 'react';
import logo from '../../Assets/logof.png'

const BannerText = () => {
    return (
    <>
        <div className='flex-col fixed left-0 ps-5'>
          <h1 className='text-9xl tracking-widest font-sans font-bold text-white'>LOCAL</h1>
          <h1 className='text-9xl tracking-widest font-sans font-bold  text-white'>HOPES</h1>
          <h2 className='text-5xl mt-4 font-sans tracking-wider text-white'>TRAINING ACADEMY</h2>
          <h2 className='text-6xl mt-5 font-sans italic font-bold text-[#C9A643]'>Success Is A Habit</h2>
        </div>
        <div className='absolute right-20'>
          <img className='w-[600px]' src={logo} alt="Logo" />
        </div>
    </>
    );
};

export default BannerText;