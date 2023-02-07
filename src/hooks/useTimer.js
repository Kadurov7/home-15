import { useEffect, useState } from "react";

export const useTimer = ()=>{
    const [input, setInput] = useState("")
    const [times, setTimes] = useState()
    const [iscounting, setIsCounting] = useState(false)

    const result = input * 60;

    const inputChangeHandle = (value)=>{
       setInput(value)
    }
    const addHandler = ()=>{
        setTimes(result)
        setInput("")
    };

    useEffect(()=>{
     const interval = setInterval(()=>{
        iscounting &&  
        setTimes((times) => (times >= 1 ? times -1 : 0))
     },1000);

     return ()=>{
        clearInterval(interval)
     }
    },[iscounting])

    const startHandler = ()=>{
      setIsCounting(true)
    }

    const stopHandler = ()=>{
        setIsCounting(false)
    }

    const resetHandler = ()=>{
        setIsCounting(false)
        setTimes(0)
    };

    return {
        times,
        iscounting,
        startHandler,
        stopHandler,
        input,
        inputChangeHandle,
        addHandler,
        resetHandler
    }

    
}