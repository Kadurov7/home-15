import React from 'react'
import { useInput } from '../../hooks/useInput'
import styled from 'styled-components'


const InputPassword = () => {

    const {inputChangeHandler, valid,  error, errorPasswordHandler} = useInput()

  return (
    <div>
        { error ? <H3>Very Good</H3> : <P>Упс, ошибка!</P> }
        <Input 
              type="password"
              value={valid}
              placeholder="password...."
              onChange={inputChangeHandler}
              onBlur={errorPasswordHandler} />
    </div>
  )
}

export default InputPassword;

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