import axios from "axios"
import { useEffect, useState } from "react"
import B1 from "./B1"
function A1 (){
    const [getData ,setData]= useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            setData(res.data)
            // console.log(res)
        })
        .catch(error=> console.log(error))
    },[])
    return(
       <div>
        <B1 listdata={getData}/>
       </div>
    )
}
export default A1