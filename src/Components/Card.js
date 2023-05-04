import React from "react";


const Card = ({card}) => {
  console.log(card.img);
  return (
    <div class="card bg-blue-800 shadow-xl">
      <figure class="px-8 pt-8">
        <img

          src={card.img}
          alt={card.name}
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="text-2xl font-semibold">{card.name}</h2>
        
      </div>
    </div>
  );
};

export default Card;
