import { useState } from "react"

function Test (){
    const [getInput, setInput]= useState("")
    const [getErr, setErr]= useState("")
    

    function xulyInput1(e){
        setInput(e.target.value)
    }
    function Xuliform1 (e){
        e.preventDefault()
        let x =1
       if(getInput==""){
        x=2
        setErr("Nhập input")
       } else{
         setErr("")
       }
       if(x == 1){
        alert("Thành Công")
       }

    }
    return(
        <form onSubmit={Xuliform1}>
            <select  value={getInput} onChange={xulyInput1}>
                <option value="">Vui Lòng Chọn</option>
                <option value="1">female</option>
                <option value="2">Male</option>
            </select>
            <p>{getErr}</p>
            <button type="submit">Click</button>
        </form>
    )
}
export default Test