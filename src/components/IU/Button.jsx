import React from 'react'
import styled from 'styled-components';


const Button = ({text, onClick, color}) => {
  return (
    <div>
        <Buttons onClick={onClick}  style={{backgroundColor:`${color}`}}>{text}</Buttons>
    </div>
  )
}

export default Button;

const Buttons = styled.button`
    height: 34px;
    border-radius: 4px;
    border: none;
    font-style: oblique;
    font-size: 16px;
`