import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/effect-flip'
import { Autoplay, EffectFlip  } from 'swiper';

import player1 from '../../Assets/player/player1.jpg'
import player2 from '../../Assets/player/player2.jpg'
import player3 from '../../Assets/player/player3.jpg'
import player4 from '../../Assets/player/player4.jpg'
import player5 from '../../Assets/player/player5.jpg'
import player6 from '../../Assets/player/player6.jpg'
import player7 from '../../Assets/player/player7.jpg'
import player8 from '../../Assets/player/player8.jpg'



const SliderSection = () => {
  return (
    <Swiper
    modules={[Autoplay, EffectFlip ]}
      spaceBetween={0}
      slidesPerView={4}
      loop={true}
      autoplay={{delay:3000}}
      effect='slide'
      speed={3000}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={player1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={player2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={player3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={player4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={player5} alt="" /></SwiperSlide>
      <SwiperSlide><img src={player6} alt="" /></SwiperSlide>
      <SwiperSlide><img src={player7} alt="" /></SwiperSlide>
      <SwiperSlide><img src={player8} alt="" /></SwiperSlide>



      ...
    </Swiper>
  )
}

export default SliderSection