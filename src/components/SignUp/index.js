import React, { useState } from "react"
import { SignupContainer, ImgBgSign, ArrowForward, ArrowRight, SignupBtn, SignupContent, SignupH1, SignupP } from "./SignupElements";
import { Button } from '../ButtonElement'

const SignUp = () => {
    const { hover, setHover } = useState(true)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <SignupContainer id="signup">
            <SignupContent>
                    <SignupH1>WHERE WILL YOUR STORY BEGIN?</SignupH1>
                    <SignupP>Learn more about the latest news, our people, our values, and inside perspectives of life at Disney.</SignupP>
                    <SignupBtn>
                        <Button to='home' onMouseEnter={onHover} onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >
                            Let's Start {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                        </SignupBtn>
            </SignupContent>
        </SignupContainer>
    );
};

export default SignUp;