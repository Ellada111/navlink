import { useNavigate } from "react-router-dom";


export function LoginPage (){
  
        const navigate= useNavigate ()
        function submit (e) {
            e.preventDefault ()

            setTimeout (()=>{
                navigate ('/')
            }, 3000)
        }
        return (
            <form onSubmit={submit}>
            <input type="text"
            placeholder="login"
            name="login"
            />
            <button type="submit"> log in</button>
            </form>
    )

}