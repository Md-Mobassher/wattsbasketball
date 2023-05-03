import React from 'react';
import logo from '../../Assets/logof.png'

const BannerText = () => {
    return (
    <>
        <div className='flex-col fixed left-0 ps-5'>
          <h1 className='lg:text-9xl md:text-8xl text-7xl tracking-widest font-sans arial font-black text-white '>WATTS</h1>
          <h1 className='lg:text-8xl md:text-6xl text-6xl tracking-wide font-sans font-bold  text-white '>BASKETBALL</h1>
          <h3 className='lg:text-5xl md:text-4xl text-3xl mt-4 font-sans tracking-wider text-white'>TRAINING ACADEMY</h3>
          <h2 className='lg:text-6xl md:text-5xl text-4xl mt-5 font-sans italic font-bold text-[#FEBA11] '>Success Is A Habit</h2>
        </div>
        <div className='absolute right-20'>
          <img className='w-[600px]' src={logo} alt="Logo" />
        </div>
    </>
    );
};

export default BannerText;