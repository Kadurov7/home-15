import React from 'react'
import Button from '../IU/Button'
import styled from 'styled-components'
import { useCounter } from '../../hooks/useCounter'


const Counter = () => {
 
 const {count, decrementHandler, incrementHandler, resetHandler} = useCounter(4)


  return (
    <Container>
        <ButtonStyle>
        <Button color="orange" onClick={incrementHandler} text="Increment"></Button>
        <Button color="#0a6e96" onClick={decrementHandler} text="Decrement"></Button>
        <Button color="#7bb906" onClick={resetHandler} text="Reset"></Button>
        </ButtonStyle>
        <H1>result:{count}</H1>
    </Container>
  )
}

export default Counter;

const Container = styled.div`
    width: 300px;
    display: flex;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    margin-top: 2rem;
    flex-direction: column;
    background-color: #111180;
    margin-left: 2rem;
    -webkit-box-shadow: 21px 12px 15px 8px rgba(23, 31, 37, 0.19);
   -moz-box-shadow: 21px 12px 15px 8px rgba(23, 31, 37, 0.19);
   box-shadow: 21px 12px 15px 8px rgba(23, 31, 37, 0.19);
`
const ButtonStyle = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
`
const H1 = styled.h1`
    color: white;
`