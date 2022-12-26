import styled from 'styled-components'

export const DiscoverContainer= styled.div`
padding: 8rem calc((100vw - 1100px) /2);
background-image: linear-gradient(to bottom right, #37d5d6 , #36096d);
`
export const DiscoverWrapper= styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: repeat(auto, 350px);
`
export const DiscoverCard= styled.div`
margin: 1rem;
border-radius: 10px;
position: relative;


&:nth-child(3) {
    grid-row: 2/4;
    grid-column:2/3;
}

`
export const DiscoverText= styled.div`
padding: 1rem;

&:nth-child(1) {
    grid-row: 1/3;
    grid-column: 2/3;
}
&:nth-child(2) {
    grid-row: 5/6;
    grid-column: 1/2;
}
`
export const DiscoverH1= styled.h1`
margin-bottom: 1rem;
font-size: 3rem;
color: white;
text-shadow: blue 1px 0 10px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`
export const DiscoverP= styled.p`
font-size: clamp(1rem, 3vw, 1.3rem);
line-height: 1.4;
color:#fff;
`
export const DiscoverP1= styled.p`
position: absulute;
bottom: 30px;
color: #fff;
left: 25px;
font-size: 2rem;

@media screen and (max-width: 480px) {
    font-size: 1rem;
}
`

export const DiscoverImg= styled.img`
position: relative;
bottom: -30px;
width:100%;
height: 100%;
border-radius: 10px;
`

