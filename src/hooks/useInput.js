import { useState } from "react";


export const useInput = ()=>{
     const [valid, setValid ]= useState("");
     const [error, setError] = useState(false)

       const inputChangeHandler = (e)=>{
        setValid(e.target.value);    
     }

    
      
     const errorEmailHandler = ()=>{
        setError(valid.includes("@"))
     }

     const errorPasswordHandler = ()=>{
        setError(valid.trim().length > 6)
     }

     const errorTextdHandler = ()=>{
        setError(valid.trim().length > 5)
     }
     return {
        valid,
        error,
        inputChangeHandler,
        errorEmailHandler,
        errorPasswordHandler,
        errorTextdHandler
     }
}