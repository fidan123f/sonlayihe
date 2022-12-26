import ImgBgSign from '../../images/merida.jpg'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
import styled from 'styled-components'


export const SignupContainer =styled.div`
background: linear-gradient(to right, rgba(0,0,0,0.7),
rgba(0,0,0,0.1))
,
url(${ImgBgSign});
background-position: center;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 600px;
position: relative;
z-index: 1;
}
`
export const SignupContent =styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 10px 24px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const SignupH1=styled.h1`
color: #fff;
font-size: 48px;
text-align: center;


@media screen and(max-width: 760px) {
    font-size: 40px;
}

@media screen and(max-width: 480px) {
    font-size: 32px;
}
`

export const SignupP= styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and(max-width: 760px) {
    font-size: 24px;
}

@media screen and(max-width: 480px) {
    font-size: 18px;
`
export const SignupBtn= styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
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