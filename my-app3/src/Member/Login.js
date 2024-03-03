import { useState } from "react"
import Erros from "./Erros"
import Register from "./Register"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function Login (){
  const  NOTIFICATION  =  ( )  =>  toast.error ( " Login Thất Bại", {
    position:toast.POSITION.TOP_CENTER,
    
  } ) ;
  // toast.success("VÕ VĂN CƯỜNG",{
  //   position:toast.POSITION.TOP_RIGHT
  // })
  
  const navigate = useNavigate();
  
  const [getInput , setInput]=useState({
    password:"",
    email:"",
    level:0

  })
  const [error , setErros]= useState({})
  const [isToongle, setisToongle]= useState (true)
  const handleInput =(e)=>{
    const nameInput= e.target.name;
    const value= e.target.value;
    setInput(state=>({...state,[nameInput]:value}))
    // console(handleInput)
  }
  function hanldeSubmit(e){
    e.preventDefault()
    let errorsSubmit={}
    let flag = true

    
    if (getInput.email==""){
      errorsSubmit.email="Vui Lòng Nhập Email"
      flag=false
    } 
//     else {
//       const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//             if (!emailRegex.test(getInput.email)) {
//                 errorsSubmit.email = "Email không hợp lệ";
//             flag = false;
// }
//     }
    if (getInput.password==""){
      errorsSubmit.password="Vui Lòng Nhập Pass"
      flag=false
    }
    if (getInput.level==""){
      errorsSubmit.level="Vui Lòng Nhập Level"
      flag=false
    }
    if(!flag){
      setErros(errorsSubmit)
    } else {
      const data = {
        email: getInput.email,
        password: getInput.password,
        level: 0
      }
       axios.post("http://localhost/laravel8/public/api/login",data)
       .then(responsi=>{
        // console.log("res",responsi)
        if(responsi.data.errors){
          setErros(responsi.data.errors)
          alert("Lỗi")
        } else {
          console.log(responsi)
          NOTIFICATION()
          
          const responseData = responsi.data; // Dữ liệu muốn lưu
          // console.log(responsi.data)
         localStorage.setItem('myData', JSON.stringify(responseData));
          //Lưu giá trị
         localStorage.setItem('setisToongle', JSON.stringify(isToongle));
          navigate('/')
        }
        console.log()
       })
       .catch(function(error){
        console.log(error)
       })
      setErros({})
    }
  }
    return (
        <>
        < Erros errors = {error}/>
         <section id="form">{/*form*/}
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-sm-offset-1">
                <div className="login-form">{/*login form*/}
                  <h2>Login to your account</h2>
                  <form action="#" onSubmit={hanldeSubmit}>
                    <input type="email" placeholder="Email" name="email" onChange={handleInput}/>
                    <input type="password" placeholder="Mật Khẩu" name="password" onChange={handleInput}/>
                    <input type="text" placeholder="Level" name="level" onChange={handleInput}/>
                    <span>
                      <input type="checkbox" className="checkbox" /> 
                      Keep me signed in
                    </span>
                    <button  type="submit" className="btn btn-default" onClick={e => NOTIFICATION()}>Login</button>
                    <ToastContainer

/>
                  </form>
                </div>{/*/login form*/}
              </div>
              <div className="col-sm-1">
                <h2 className="or">OR</h2>
              </div>
              {Register()}
            </div>
          </div>
        </section>{/*/form*/}
        </>
    )
}
export default Login


