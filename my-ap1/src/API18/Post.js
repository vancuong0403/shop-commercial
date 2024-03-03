import axios from "axios"
import { useState } from "react"

function Post (){
    const [Input , setInput]= useState("")
    function handleChange(e){
        setInput(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        const data = {
            name : Input
        }
        axios.post("https://jsonplaceholder.typicode.com/users", data)
        .then((res)=>{
            console.log(res)
            console.log(data)
        })
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={Input} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Post