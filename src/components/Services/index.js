import React from 'react'
import Icon1 from '../../images/icon1.jpg'
import Icon2 from '../../images/icon2.jpg'
import Icon3 from '../../images/icon3.jpg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Some of Disney characters</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Buzz Lightyear</ServicesH2>
            <ServicesP> Buzz Lightyear is the main character in the Toy Story franchise.</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Vanellope von Cupcake</ServicesH2>
            <ServicesP>She is the main character of the Disney cartoons Ralph and Ralph Breaks the Internet.</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>WALL-E</ServicesH2>
            <ServicesP>WALL-E is a cleaning robot from WALL-E animated by Pixar Studios.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
