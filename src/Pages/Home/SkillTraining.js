import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs';

const SkillTraining = () => {
  return (
    <section className='bg-gradient-to-tr from-blue-900 to-indigo-800 h-screen px-10 py-16'>
     <div className='flex flex-row h-full'>
        <div className='basis-1/2 flex justify-center items-center h-full'>
            <div className='border-8  border-yellow-500  rounded-full w-[30rem] h-[30rem]	'></div>
        </div>
        <div className='basis-1/2'>
            <h2  className='lg:text-7xl text-4xl font-sans font-semibold text-[#FEBA11] text-center'>Skills Training</h2>
            <h2  className='lg:text-7xl text-4xl mt-5 font-sans font-semibold text-[#FEBA11] text-center'>& Team Play</h2>

            <div className='border-2 border-yellow-500 w-3/4 my-10 rounded mx-auto '></div>

            <div className='px-20'>
              <p className='text-2xl text-yellow-400 text-center'>Based on fundamentals, hard work, teamwork & sportsmanship. For athletes at all levels. Success is a habit.</p>
            </div>
            <div className='text-yellow-400 flex justify-center mt-10'>
             <button className='mr-10 flex justify-center items-center gap-2 '> <a href='/'>Learn about training</a> <BsBoxArrowUpRight />  </button>

             <button className='mr-10 flex justify-center items-center gap-2'> <a href='/'>Learn about team play</a> <BsBoxArrowUpRight />  </button>
              
            </div>
        </div>
     </div>
    </section>
  )
}

export default SkillTraining