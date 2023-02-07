import { useState } from "react";

export const useCounter = (init)=>{
     const [count, setCount] = useState(0)

     const incrementHandler = ()=>{
            
        setCount((prevState)=> prevState + init)
     }

     const decrementHandler = ()=>{
        setCount((prevState)=>{
            if(prevState > 0) {
                return prevState - 2
            }

            return prevState
        })
     }
     
     const resetHandler = ()=>{
        setCount(0)
     }
     return {
        count,
        incrementHandler,
        decrementHandler,
        resetHandler
     }
}