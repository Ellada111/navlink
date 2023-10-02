import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function MainPage () {

const navigate= useNavigate ()
    const [count, setCount] = useState (0)
    function increment () {
        setCount (count + 1);
        if (count + 1 === 10) {
          navigate  ('/login')
        }
    }    
           
       

    return (
        <>
        <h1>MainPage</h1>
        <button onClick={increment}> +</button>
        </>
    )
}