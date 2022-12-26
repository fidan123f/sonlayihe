import React, { useState } from "react"
import { AboutContainer, ImgBg, ArrowForward, ArrowRight, AboutBtn, AboutContent, AboutH1, AboutItems, AboutP } from "./AboutElements";
import { Button } from '../ButtonElement'

const About = () => {
    const { hover, setHover } = useState(true)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <AboutContainer id="about">
            <AboutContent>
                <AboutItems>
                    <AboutH1>About Disney</AboutH1>
                    <AboutP>The Walt Disney Company, commonly known as Disney is an American multinational mass media and entertainment conglomerate headquartered at the Walt Disney Studios complex in Burbank, California.The mission of The Walt Disney Company is to entertain, inform and inspire people around the globe through the power of unparalleled storytelling, reflecting the iconic brands, creative minds and innovative technologies that make ours the world’s premier entertainment company. </AboutP>
                    <AboutBtn>
                        <Button to='home' onMouseEnter={onHover} onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >
                            View More {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button></AboutBtn>
                </AboutItems>
            </AboutContent>
        </AboutContainer>
    );
};

export default About;