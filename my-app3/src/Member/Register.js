import { useState } from "react"
import Erros from "./Erros";
import axios from "axios";
function Register(){
  const [getInput , setInput]= useState({
    name:"",
    email:"",
    password:"",
    phone:"",
    address:"",
    level:0
  })
  
  const [error,setErros]= useState ({})
  const [getFile, setFile]=useState("")
  const [getAvatar ,setAvatar]= useState({})

  function handleUserInputFile(e){
    const file = e.target.files;

    let reader = new FileReader();
    reader.onload=(e)=>{
      
      setAvatar(e.target.result); //Cái này để gửi qua api
      
      setFile(file)// Cái này để toàn bộ thông tin file upload vào file để xử lý
     
    }
    reader.readAsDataURL(file[0])
  }
//  function handleFile(e){
//   setFile(e.target.files)
//   console.log(e.target.files)
//  }
  const handleInput=(e)=>{
    const nameInput= e.target.name;
    const value = e.target.value;
    setInput(state=>({...state,[nameInput]:value}))
  }
  function handleSubmit(e){
    e.preventDefault()
    let errorsSubmit={}
    let flag= true
    if(getInput.name==""){
      errorsSubmit.name="Vui Lòng Nhập Tên Để Đăng Kí"
      flag=false
    }
    if(getInput.email==""){
      errorsSubmit.email="Vui Lòng Nhập Email Để Đăng Kí"
      flag=false
    }
    if(getInput.password==""){
      errorsSubmit.password="Vui Lòng Nhập Pass Để Đăng Kí"
    }
    if(getInput.phone==""){
      errorsSubmit.phone="Vui Lòng Nhập Phone Để Đăng Kí"
      flag=false
    }
    if(getInput.address==""){
      errorsSubmit.address="Vui Lòng Nhập Địa Chỉ Để Đăng Kí"
      flag=false
    }
    if(getFile==""){
      errorsSubmit.avatar="Vui Lòng Chọn Ảnh"
      flag= false
    } else {
      let getSize = getFile[0]["size"]
      let getName = getFile[0]["name"]
      // s
      let getDuoi = ["png", "jpg", "jpeg", "PNG", "JPG"]
      const myArray = getName.split(".")
      // 
      
      myArray.reverse()
      // console.log(myArray)
      if(getSize > 1024*1024){
        errorsSubmit.avatar="Ảnh có dung lượng lớn"
        flag= false
      } else if(!getDuoi.includes(myArray[0])){
        errorsSubmit.avatar="Ảnh có đuôi không hợp lệ"
        flag=false
      }
      
    }
    // if(getInput.level==""){
    //   errorsSubmit.level="Vui Lòng Nhập Level Để Đăng Kí"
    //   flag=false
    // }
    
    if(!flag){
      setErros(errorsSubmit)
    } else {
     
       const data ={  
       name :getInput.name,
       email: getInput.email,
       password: getInput.password,
       phone : getInput.phone,
       address : getInput.address,
       avatar: getAvatar,
       level : getInput.level
       }
       
    
      
        axios.post("http://localhost/laravel8/public/api/register", data)
          .then(response => {
            // console.log(response)
            if(response.data.errors){
              setErros(response.data.errors)
              alert("lỗi")
            } else {
              // console.log(response)
              alert("Thành Công")
            }
          })
          .catch((error) => {
            console.error(error);
          });
      // localStorage.setItem("email",getInput.email);
      // localStorage.setItem("pass",getInput.pass)
      setErros({})
      alert("Đăng Kí Thành Công")
    }
  }
    return (
  
     <>
      <Erros errors = {error} />
        
          <div className="row">
            <div className="col-sm-4">
              <div className="signup-form">{/*sign up form*/}
                <h2>New User Signup!</h2>
                <form action="#" onSubmit={handleSubmit} encType="multipart/form-data">
                  <input type="text" placeholder="Nhập Tên"    name="name" onChange={handleInput}/>
                  <input type="email" placeholder="Nhập Email"   name="email" onChange={handleInput}/>
                  <input type="password" placeholder="Nhập mật khẩu" name="password" onChange={handleInput}/>
                  <input type="text" placeholder="Phone"  name="phone" onChange={handleInput}/>
                  <input type="text" placeholder="Nhập địa chỉ"  name="address" onChange={handleInput}/>
                  <input type="file"  name="avatar"  onChange={handleUserInputFile}/>
                  <input type="text"  name="lever" onChange={handleInput}/>
                  <button type="submit" className="btn btn-default">Signup</button>
                </form>
              </div>{/*/sign up form*/}
            </div>
          </div>
            </>
    )
     
}



export default Register



