import { useEffect } from "react"
import { useState } from "react"
// import { Link } from "react-router-dom"
import Erros from "../../Member/Erros"
import axios from "axios"

function Account() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",

    
  })
  // console.log("res",user)
  
  const [error, setErros] = useState({})
  const [getFile, setFile] = useState("")
  const [getAvatar, setAvatar] = useState({})
  useEffect(() => {
    let userData = localStorage.getItem("myData");
    // console.log("userData",userData)
    if (userData) {
      userData = JSON.parse(userData)
      // console.log(userData)
      // userData = userData.user
    
      setuser({
        name: userData.Auth.name,
        email: userData.Auth.email,
        password: userData.Auth.password,
        address: userData.Auth.address,
        phone: userData.Auth.phone,
        id:userData.Auth.id
       
      })
  }
  console.log("userData",userData)
  
  }, [])
  
  function handleUserInputFile(e) {
    const file = e.target.files;

    let reader = new FileReader();
    reader.onload = (e) => {
      setAvatar(e.target.result); //Cái này để gửi qua api

      setFile(file)// Cái này để toàn bộ thông tin file upload vào file để xử lý

    }
    reader.readAsDataURL(file[0])
  }
  const handleInput = (e) => {
    // const { name, value } = e.target;
    const getName = e.target.name
    const getValue = e.target.value

    setuser(state => ({ ...state, [getName]: getValue }))
  };
  function handleSubmit(e) {
    e.preventDefault()
    let errorsSubmit = {}
    let flag = true
    if (user.name == "") {
      errorsSubmit.name = "Vui Lòng nhập tên"
      flag = false
    }
    if (user.email == "") {
      errorsSubmit.email = "Vui Lòng nhập email"
      flag = false
    }
    if (user.address == "") {
      errorsSubmit.address = "Vui Lòng nhập địa chỉ"
      flag = false
    }
    if (user.phone == "") {
      errorsSubmit.phone = "Vui Lòng nhập số điện thoại"
      flag = false
    }
    if (getFile) {

      let getSize = getFile[0]["size"]
      let getName = getFile[0]["name"]
      // s
      let getDuoi = ["png", "jpg", "jpeg", "PNG", "JPG"]
      const myArray = getName.split(".")
      // 

      myArray.reverse()
      // console.log(myArray)
      if (getSize > 1024 * 1024) {
        errorsSubmit.avatar = "Ảnh có dung lượng lớn"
        flag = false
      } else if (!getDuoi.includes(myArray[0])) {
        errorsSubmit.avatar = "Ảnh có đuôi không hợp lệ"
        flag = false
      }

    }
    if (!flag) {
      setErros(errorsSubmit)
    } else {

      let isComment = JSON.parse(localStorage.getItem('myData'));
      console.log("iscomment",isComment)
     
      console.log("iscomment",isComment)
      const accessToken = isComment.token;
      console.log(accessToken)
      const userId = isComment.Auth.id

      console.log(userId)
      const config = {
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      };
      const formData = new FormData();
      formData.append('name', user.name)
      formData.append('email', user.email)
      formData.append('password', user.password)
      formData.append('address', user.address)
      formData.append('phone', user.phone)
      formData.append('file[]', getAvatar.avatar)

      axios.post(`http://localhost/laravel8/public/api/user/update/${user.id}`,formData,config)
        .then(response => {
          console.log("res",response.data.Auth)
          if (response.data.error) {
            alert("Lỗi")
          } else {
            // const updatedUserData = {
            //   Auth: {
            //     id: userId,
            //     name: user.name,
            //     email: user.email,
            //     password: user.password,
            //     address: user.address,
            //     phone: user.phone,

            //     token: accessToken
            //   }
            // }

            
            localStorage.setItem("myData", JSON.stringify(response.data));
            alert("Đã Post")
          }
        })
      setErros({})

      alert("OK")
    }
  }
  return (
    <section>
      <Erros errors={error} />
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="blog-post-area">
              <h2 className="title text-center">Update user</h2>
              <div className="signup-form">{/*sign up form*/}
                <h2>New User Signup!</h2>
                <form action="#" onSubmit={handleSubmit} encType="multipart/form-data">
                  <input type="text" placeholder="Name"  value={user.name} name="name" onChange={handleInput} />
                  <input type="email" placeholder="Email Address" value={user.email} name="email" onChange={handleInput} readOnly />
                  <input type="Password" placeholder="Password" value={user.password} name="password" onChange={handleInput} />
                  <input type="text" placeholder="Address" value={user.address} name="address" onChange={handleInput} />
                  <input type="text" placeholder="Phone" value={user.phone} name="phone" onChange={handleInput} />
                  <input type="file" name="avatar" onChange={handleUserInputFile} />
                  <button type="submit" className="btn btn-default">Signup</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Account