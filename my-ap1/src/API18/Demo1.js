import axios from "axios";
import { useEffect, useState } from "react";

function Demo(){
    const[data , setData]= useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            setData(res.data)
            console.log(res)
        })
        .catch(error=> console.log(error))
    },[])
    function renderData(){
        if(data.length > 0 ){
            return data.map((value , key)=>{
                return (
                    <li key={key}>
                        <p>{value.id}</p>
                        <p>{value.name}</p>
                        <p>{value.email}</p>

                    </li>
                )
            })
        }
    }
    return(
        <ul>
            {renderData()}
        </ul>
    )
}
export default Demo