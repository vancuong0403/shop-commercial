import { useState } from "react";
import Erros from "./Erros";
function Login(props){
    const [inputs,setInputs]=useState({
        email:"",
        pass:""
    })
    const[errors,setErrors]=useState({})

    const handleInput = (e)=>{
        const nameInput = e.target.name; // lấy name cua thẻ input de lam key
        const value = e.target.value //lây value của thẻ input de lam value
        setInputs(state=>({...state,[nameInput]:value}))
        console.log(handleInput)

    }
    function hanldeSubmit(e){
        e.preventDefault()
        let errorsSubmit={}
        let flag = true


        if(inputs.email==""){
            errorsSubmit.email=" Vui lòng nhập email"
            flag= false
        } 
        if(inputs.pass==""){
            errorsSubmit.pass="Vui lòng nhập pass"
            flag=false  
        }

        // flag = 2 => co 1 cai nao do chua nhap
        // nêu cả 2 cái chua nhâp thi hiên thi lôi ra 
        if(!flag){
            setErrors(errorsSubmit)
        }else{
            // xóa lỗi khi đã nhập
            setErrors({})
        }
    }
    return (
        <div > 
           <Erros errors = {errors} />
                <form onSubmit = {hanldeSubmit}>
                    <input type="text" placeholder="Email" name="email" onChange={handleInput}/>
                    <input type="password" name="pass" onChange={handleInput}/>
                    <button type="submit" className="btn btn-default">Login</button>
                </form>
        </div>
    )
}
export default Login