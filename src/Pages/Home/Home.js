import React from 'react'
import Banner from './BannerSection'
import SkillTrainingSection from './SkillTrainingSection'
import ExpertCoachSection from './ExpertCoachSection'
import TrainingFocusedSection from './TrainingFocusedSection'
import TestimonialSection from './TestimonialSection'
import CardSection from './CardSection'
import SliderSection from './SliderSection'

const Home = () => {
  return (
    <>
      <Banner videoId='uuSj5EW6ELA' />  
      <SkillTrainingSection />
      <ExpertCoachSection videoId='41yiOpkqT9I'  />
      <TrainingFocusedSection />
      <TestimonialSection />
      <CardSection />
      <SliderSection />
    </>
  )
}

export default Home