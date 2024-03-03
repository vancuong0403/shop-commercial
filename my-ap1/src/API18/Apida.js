import axios from "axios"
import { useEffect, useState } from "react"

function Apida (){
    const[getData , setData]= useState("")
    useEffect(()=>{
        axios.get("http://localhost/laravel8/public/api/blog")
        .then(res=>{
            setData(res.data)
            console.log(res)
        })
        .catch(error=> console.log(error))
    },[])
    return(
        <>
        </>
    )
}
export default Apida