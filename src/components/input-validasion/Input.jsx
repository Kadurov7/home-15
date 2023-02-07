import React from 'react'
import InputEmail from './InputEmail'
import InputPassword from './InputPassword'
import InputText from './InputText'
import styled from 'styled-components'

const Input = () => {
  return (
    <Container>
      <InputEmail/>
      <InputPassword/>
      <InputText/>
    </Container>
  )
}

export default Input;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #09848d;
    width: 350px;
    margin-left: 24rem;
    margin-top: -9.7rem;
    gap: 1rem;
    border-radius: 7px;
    -webkit-box-shadow: 21px 12px 15px 8px rgba(23, 31, 37, 0.19);
   -moz-box-shadow: 21px 12px 15px 8px rgba(23, 31, 37, 0.19);
   box-shadow: 21px 12px 15px 8px rgba(23, 31, 37, 0.19);
    padding: 17px;
`