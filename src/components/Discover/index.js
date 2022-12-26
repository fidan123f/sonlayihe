import React from "react"
import Img1 from '../../images/avatar1.jpg'
import Img2 from '../../images/avatar2.jpg'
import Img3 from '../../images/avatar3.jpg'
import {DiscoverContainer, DiscoverCard, DiscoverH1, DiscoverImg, DiscoverP, DiscoverP1, DiscoverText, DiscoverWrapper} from './DiscoverElements'

const Discover = () => {
  return (
    <DiscoverContainer id="discover">
      <DiscoverWrapper>
        <DiscoverText>
            <DiscoverP>Discover</DiscoverP>
            <DiscoverH1>Recent News</DiscoverH1>
            <DiscoverP1>How 'Avatar: the Way of Water' Revolutionizes Underwater Cinematography</DiscoverP1>
        </DiscoverText>
        <DiscoverCard>
        <DiscoverImg src={Img1}/>
        </DiscoverCard>
        <DiscoverCard>
        <DiscoverImg src={Img2}/>
        </DiscoverCard>
        <DiscoverCard>
        <DiscoverImg src={Img3}/>
        </DiscoverCard>
      </DiscoverWrapper>
    </DiscoverContainer>
  )
}

export default Discover
