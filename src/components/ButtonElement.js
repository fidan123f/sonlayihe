import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
border-radius: 50px;
background: #fff;
white-space: newrap;
padding: ${({big})=> (big ? '14px 48px' : '12px 30px')}
color: ${({dark})=>(dark? '#fff' : '#010606')}
font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')}
outline: none;
border: none;
padding-right: 1px;
padding-left: 6px;
width: 140px;
height: 40px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary})=> (primary ? '#0183bf':'#fff' )}
    
}
`