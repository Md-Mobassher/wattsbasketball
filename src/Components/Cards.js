import React from "react";
import training from '../Assets/card/training.jpeg'
import camp from '../Assets/card/camps.jpeg'
import team from '../Assets/card/teams.jpeg'


const Cards = () => {


  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center self-center">

     <div class="max-w-sm overflow-hidden hover:scale-105 transition-all duration-300 card bg-blue-800 shadow-xl link">
      <figure class="px-8 pt-8">
        <img
          src={training}
          alt='training'
          class="rounded-xl w-96 h-80"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="text-2xl font-semibold text-white decoration-none ">Training</h2>      
      </div>
    </div>

     <div class="max-w-sm overflow-hidden hover:scale-105 transition-all duration-300 card bg-blue-800 shadow-xl link">
      <figure class="px-8 pt-8">
        <img
          src={camp}
          alt='Camp'
          class="rounded-xl w-96 h-80"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="text-2xl font-semibold text-white">Camp</h2>      
      </div>
    </div>

     <div class="max-w-sm overflow-hidden hover:scale-105 transition-all duration-300 card bg-blue-800 shadow-xl link">
      <figure class="px-8 pt-8">
        <img
          src={team}
          alt='Team'
          class="rounded-xl w-96 h-80"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="text-2xl font-semibold text-white">Team</h2>      
      </div>
    </div>
    </div>
  );
};

export default Cards;
