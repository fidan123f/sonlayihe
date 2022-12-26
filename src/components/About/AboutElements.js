import styled from 'styled-components'
import ImgBg from '../../images/frog.webp'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const AboutContainer= styled.div`
background: linear-gradient(to right, rgba(0,0,0,0.7),
rgba(0,0,0,0.1))
,
url(${ImgBg});
height: 100vh;
background-position: center;
background-size: cover;
`
export const AboutContent= styled.div`
height: calc(100vh  -80px);
max-height: 100%;
width: 100vw;
padding: 0rem calc((100vw- 1300px) /2);
`
export const AboutItems=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height: 100vh;
max-height: 100%;
padding: 0 2rem;
width: 650px;
color: #fff;
text-transform: uppercase;
line-height: 1;
font-weight: bold;

@media screen and (max-width: 650px) {
    width: 100%;
}
`
export const AboutH1= styled.h1`
font-size: clamp(2.5rem, 10vw, 5rem);
margin-bottom: 1rem;
box-shadow: 3px 5px #0183bf;
color: #fff;
transition: 0.2s ease-out;

&:hover {
    background: #0183bf;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
}
`
export const AboutP= styled.p`
font-size: clamp(0.5rem, 1.5vw, 2rem);
margin-bottom: 2rem;
`
export const AboutBtn= styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
color: black;
`

export const ArrowForward= styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
height:30px;
width: 2rem;
`
export const ArrowRight= styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
height:40px;
width: 2.5rem;
`