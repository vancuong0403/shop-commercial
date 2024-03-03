import { useState } from "react"
import Erros from "./Erros"
function LoginRg(props){
    const [getData , setData] = useState({
        email : "",
        pass:"",
    })
   
    const [getErros , setErros] = useState ({})

    const handleInput = (e)=> {
        const nameInput = e.target.name;
        const value = e.target.value
        setData(state=>({...state,[nameInput]:value}))

    } 
    function handleSubmit(e){
        e.preventDefault()
        let errosSubmit={}
        let flag = true


        if(getData.email ==""){
            errosSubmit.email="Vui Lòng Nhập Email"
            flag = false
        } else {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!emailRegex.test(getData.email)) {
                errosSubmit.email = "Email không hợp lệ";
            flag = false;
}

        }
        if( getData.pass==""){
            errosSubmit.pass="Vui Lòng Nhập Pass"
            flag = false
        }     
        
        if (!flag) {
            setErros(errosSubmit);
          }else {
            // Kiểm tra email và password
            const Emaidk = localStorage.getItem('email');
            const Passdk = localStorage.getItem('pass');
      
            if (
             getData.email === Emaidk &&
             getData.pass === Passdk
            ) {
              alert('Login thành công');
            } else {
              alert('Email hoặc password không đúng');
            }
          }
        };
    return(
        <div>
        <Erros getErros={getErros}/>
           <form onSubmit={handleSubmit} enctype="multipart/form-data">
                <div>
                    <input type="email " placeholder="Email" name="email" id="email" onChange={handleInput}/>
                {/* {getErros.email && <div >{getErros.email}</div>} */}
                </div>
                <div>
                    <input type= "password" placeholder="Nhập mật khẩu " name="pass" id="pass"  onChange={handleInput}/>
                    {/* {getErros.pass && <div >{getErros.pass}</div>} */}
                </div>
                
                    <button type="submit" className="btn btn-default">Đăng Nhập</button>
            </form>
       </div>
    )
}
export default LoginRg