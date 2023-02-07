import React from 'react'
import { useInput } from '../../hooks/useInput'
import styled from 'styled-components'


const InputEmail = () => {

    const {inputChangeHandler, valid, error, errorEmailHandler} = useInput()
  return (
    <div>
        { error? <H3>GOOD</H3>:<P>Не правильно!</P>}
        <Input 
              type="email"  
              placeholder="email...."
              value={valid}
              onChange={inputChangeHandler}
              onBlur={errorEmailHandler} />
    </div>
  )
}

export default InputEmail;

const Input = styled.input`
    height: 34px;
    width: 320px;
    border-radius: 7px;
`

const P = styled.h3`
    color: red;
    font-size: 19px;
`
const H3 = styled.h3`
    color: blue;
    font-size: 19px;
`