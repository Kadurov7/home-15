import React from 'react'
import Button from '../../IU/Button'
import styled from 'styled-components'
import { useTimer } from '../../../hooks/useTimer'

const Timer = () => {

const { 
    times,
    iscounting,
    startHandler,
    stopHandler,
    resetHandler,
    input,
    inputChangeHandle,
    addHandler
     } = useTimer()

  return (
    <Container>
        <Input
               type="number"
               value={input}
               onChange={(e)=> inputChangeHandle(e.target.value )}
               />

        <Button onClick={addHandler} color="blueviolet" text="ADD"></Button>

        <Span>{`(${times || "00"})`}</Span>

      <StyledBtn>   

        {iscounting ? (
        <Button onClick={stopHandler} color="red" text="stop"></Button>
        ) : (
        <Button onClick={startHandler} color="green" text="start"></Button>
        )}
        <Button onClick={resetHandler} color="orange" text="reset"></Button>
      </StyledBtn>
      
    </Container>
  )
}

export default Timer;

const Container = styled.div`
    width: 300px;
    background-color: #051466;
    margin-left: 51rem;
    margin-top: -23.5rem;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 21px 12px 15px 8px rgba(23, 31, 37, 0.19);
   -moz-box-shadow: 21px 12px 15px 8px rgba(23, 31, 37, 0.19);
   box-shadow: 21px 12px 15px 8px rgba(23, 31, 37, 0.19);
    align-items: center;
`
const Input = styled.input`
    width: 100px;
    height: 40px;
    margin-bottom: 1rem;
    border-radius: 7px;
    font-size: 30px;
`
const StyledBtn = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    
`
const Span = styled.span`
    color: orange;
    font-size: 22px;
`