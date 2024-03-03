import axios from "axios"
import { useEffect, useState } from "react"
import B2 from "./B2"
function A2 (){
    const [getData , setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            setData(res.data[4])
            console.log(res)

        })
        .catch(error=> console.log(error))
    },[])
    return(
        <div>
            <B2 listData = {getData} />
        </div>
    )
}
export default A2