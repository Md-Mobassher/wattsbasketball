import React from 'react';
import logo from '../../Assets/logo.png'

const BannerText = () => {
    return (
    <div className=''>
        <div className=' fixed lg:left-0 lg:top-20 ps-5'>
          <h1 className='lg:text-9xl md:text-8xl text-7xl tracking-widest font-sans arial font-black text-white '>WATTS</h1>
          <h1 className='lg:text-8xl md:text-6xl text-6xl tracking-wide font-sans font-bold  text-white '>BASKETBALL</h1>
          <h3 className='lg:text-5xl md:text-4xl text-3xl mt-4 font-sans tracking-wider text-white'>TRAINING ACADEMY</h3>
          <h2 className='lg:text-6xl md:text-5xl text-4xl mt-5 font-sans italic font-bold text-[#FEBA11] '>Success Is A Habit</h2>
        </div>
        <div className='absolute lg:right-20 bottom-0 mx-auto'>
          <img className='lg:w-[600px] w-[350px] flex justify-center justify-items-center' src={logo} alt="Logo" />
        </div>
    </div>
    );
};

export default BannerText;