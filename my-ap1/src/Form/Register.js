import { useState } from "react"
import Erros from "./Erros"
function Register(props){
   
        const Arrform = [
            {
                "id": "",
                "name": "vui lòng chon",
            },
            {
                "id": 1,
                "name": "Male",
            },
            {
                "id": 2,
                "name": "Female",
            }
        ]
    const [getData , setData] = useState({
        email : "",
        pass:"",
        sex:""
    })
   
    const [getErros , setErros] = useState ("")
    
    const [getFile , setFile] = useState("")

    function handleFile(e){
        console.log(e.target.files)
        setFile(e.target.files)
      
    }
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
        if(getFile==""){
            errosSubmit.avatar="Vui Lòng Chọn Ảnh"
            flag = false
        } else {
            let getSize = getFile[0]["size"]
            let getName = getFile[0]["name"] 
            
           let getduoi = ["png", "jpg", "jpeg", "PNG", "JPG"];
            const myArray = getName.split(".");
            //Đảo ngược
            myArray.reverse();
            // 0 1 2 3 
            // 4 - 1 = cuoi cung
            console.log(myArray)
            // console.log(getSize);
            // console.log(getName)
            if(getSize > 1024 * 1024 ) {
                errosSubmit.avatar="Ảnh có dung lượng lớn"
                flag = false
            }
             else if(!getduoi.includes(myArray[0])){
                    errosSubmit.avatar="Ảnh có đuôi không hợp lệ"
                    flag = false
            } 
            
            
           
        }


        if (getData.sex == "") {
            errosSubmit.sex = "Vui lòng chọn giới tính";
            flag = false;
        }

      
        if (!flag) {
            setErros(errosSubmit);
        } else {
            localStorage.setItem("email", getData.email);
            localStorage.setItem("pass", getData.pass);
            setErros({});
           
            alert("Đăng Ký Thành Công")
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
                <div>
                    <input type="file" name="avatar" onChange={handleFile} />
                   
                </div>
                <div>
                    <select name="sex" onChange={handleInput}>
                           {Arrform.map((value , key)=>{
                                return (
                                    <option value={value.id} key={key}> {value.name}</option>
                                ) 
                                
                            })}
                    </select>  
                    {/* {getErros.sex && <div >{getErros.sex}</div>} */}
                </div>
                    <button type="submit" className="btn btn-default">Đăng Kí</button>
            </form>
       </div>
    )
}
export default Register