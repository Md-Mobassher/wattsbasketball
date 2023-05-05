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
    <div className=''>
      <Banner  />  
      <SkillTrainingSection />
      <ExpertCoachSection />
      <TrainingFocusedSection />
      <TestimonialSection />
      <CardSection />
      <SliderSection />
    </div>
  )
}

export default Home