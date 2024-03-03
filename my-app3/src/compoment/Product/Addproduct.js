import axios from "axios"
import { useEffect, useState } from "react"

function Addproduct() {
  const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
  };
  const [getcategory, setcategory] = useState([])
  const [formValue, setformValue] = useState({
    name: "",
    price: "",
    category: "",
    brand: "",
    company: "",
    detail: "",
    status: "",
    sale: "",

  })
  console.log("11",formValue);
  const [getAvatar, setAvatar]=useState ({})
  const[getFile, setFile] = useState([])
  const [getbrand, setbrand] = useState([])
  const [formError, seformError] = useState({})
  console.log("getbrand",getbrand)

  const validateForm = () => {
    const error = {};
    if (isEmptyValue(formValue.name)) {
      error["name"] = "Nhap name";
    }
    if (isEmptyValue(formValue.price)) {
      error["price"] = "Nhap price";
    }
    if (isEmptyValue(formValue.category)) {
      error["category"] = "Nhap category";
    }
    if (isEmptyValue(formValue.brand)) {
      error["brand"] = "Nhap brand";
    }
    if (isEmptyValue(formValue.status)) {
      error["status"] = "Nhap statuss";
    }
    if (isEmptyValue(formValue.company)) {
      error["company"] = "Nhap company";
    }
    if (isEmptyValue(formValue.detail)) {
      error["detail"] = "Nhap detail";
    }
    if (isEmptyValue(formValue.sale)) {
      error["sale"] = "Nhap sale";
    }
    // if (isEmptyValue(formValue.avatar)) {
    //   error["avatar"] = "Nhập Avatar";
    
    
    // }
    
    seformError(error);

    return Object.keys(error).length === 0;
  };
  const handleInput=(e)=>{
    const nameInput= e.target.name;
    const value = e.target.value;
    setformValue(state=>({...state,[nameInput]:value}))
  }

  function handleUserInputFile(e){
    setAvatar(e.target.files); //Cái này để gửi qua api
    const file = e.target.files;
    
    let reader = new FileReader();
    reader.onload=(e)=>{
 
     
      
      setFile(file[0])// Cái này để toàn bộ thông tin file upload vào file để xử lý
     
    }
    reader.readAsDataURL(file[0])
  }
  useEffect(() => {
    axios.get("http://localhost/laravel8/public/api/category-brand")
      .then(res => {
        console.log(res.data)
        let addcategory = res.data.category
        let addbrand = res.data.brand
        console.log(addcategory)
        setcategory(addcategory)
  
        setbrand(addbrand)
      })
      .catch(error => {
        console.log(error)
      })
  },[])

function handleSubmit(e){
  e.preventDefault()
  if (validateForm()) {
    if (getFile.size > 1024 * 1024) {
      alert("up lai file khac");
    }
    const img = new Image();
    img.onload = () => {
      console.log("Đây là một file ảnh");
    };
    img.onerror = () => {
      console.log("Đây không phải là file ảnh");
    };
    img.src = URL.createObjectURL(getFile);

    console.log("form value", formValue);
  } else {
    console.log("Khong hop le");
  }
  if(formValue){
    const isComment = JSON.parse(localStorage.getItem('myData'))
    const accessToken = isComment.token
    let config = {
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    };
    let formData = new FormData();
    formData.append("name", formValue.name);
    formData.append("price", formValue.price);
    formData.append("category", formValue.category);
    formData.append("brand", formValue.brand);
    formData.append("company", formValue.company);
    formData.append("detail", formValue.detail);
    formData.append("status", formValue.status);
    formData.append("sale", formValue.sale);

    Object.keys(getAvatar).map((item, i) => {
      formData.append("file[]", getAvatar[item]);
    });
    axios.post("http://localhost/laravel8/public/api/user/product/add",formData,config)
    .then(response=>{
      console.log("res" ,response)
    })
    .catch(error=>{
      console.log(error);
    })
  }
}
  return (
    <section>
      {/* <Erros errors={error}/> */}
      <div className="container">
        <div className="row">

          <div className="col-sm-9">
            <div className="blog-post-area">
              <h2 className="title text-center">Create product!</h2>
              <div className="signup-form">{/*sign up form*/}
                <h2>Add product</h2>
                <form action="#" encType="multipart/form-data" onSubmit={handleSubmit}>
                  <input type="text" placeholder="name" name="name" value={formValue.name} onChange={handleInput}/>
                  {formError.name && <div>{formError.name}</div>}
                  <input type="text" placeholder="price" name="price" value={formValue.price} onChange={handleInput} />
                  {formError.price && <div>{formError.price}</div>}
                  <select name="category"value={formValue.category} onChange={handleInput} >
                    {getcategory.map((value, key) => {
                      return (
                        <option value={value.id} key={key}>{value.category}</option>
                      )
                    })}
                  </select>
                  
                  <select name="brand" value={formValue.brand} onChange={handleInput}  >
                    {getbrand.map((value, key) => {
                      return (
                        <option value={value.id} key={key}>{value.brand}</option>
                      )
                    })}
                  </select>
                  {formError.brand && <div>{formError.brand}</div>}
                  <input type="text" placeholder="Company profile" name="company" value={formValue.company} onChange={handleInput} />
                  {formError.company && <div>{formError.company}</div>}
                  <select  name="status" value={formValue.status} onChange={handleInput} >

                    <option value="1">New</option>
                    <option value="0">Sale</option>
                  </select>

                  {formError.status && <div>{formError.status}</div>}

                  {formValue.status === "0" && (
            <div style={{ display: "flex" }}>
              <input
                style={{ width: "200px" }}
                type="text"
                name="sale"
                placeholder="Enter price sale"
                onChange={handleInput}
                value={formValue.sale}
              />
              <span style={{ marginTop: "8px" }}>%</span>
            </div>
          )}

                  {formError.sale && <div>{formError.sale}</div>}
                  <textarea name="detail" rows="4" placeholder="Detail" value={formValue.detail} onChange={handleInput} ></textarea>
                  {formError.detail && <div>{formError.detail}</div>}
                  <input type="file" name="avatar" multiple accept="image/*" onChange={handleUserInputFile} />
                  {/* {formError.avatar && <div>{formError.avatar}</div>} */}
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
export default Addproduct