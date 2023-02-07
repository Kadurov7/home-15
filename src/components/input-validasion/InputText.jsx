import React from 'react'
import { useInput } from '../../hooks/useInput'
import styled from 'styled-components'


const InputText = () => {

    const {inputChangeHandler, error, errorTextdHandler, valid} = useInput()
  return (
    <div>
        { error ? <H3>GOOD</H3> : <P>Ой ошибка!</P>}
        <Input 
              type="text"
              value={valid}
              placeholder="text...."
              onChange={inputChangeHandler}
              onBlur={errorTextdHandler} />
    </div>
  )
}

export default InputText;

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