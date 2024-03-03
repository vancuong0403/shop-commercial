import StarRatings from 'react-star-ratings';
import { useState } from "react"; 
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Rate(){
    let params =useParams()
    // console.log(params)
    const [rating, setRating] = useState(0)

    const isToongle = localStorage.getItem("setisToongle")
    
    

    function changeRating( newRating, name ) {
      
      if(!isToongle){
        alert("Vui Lòng Đăng Nhập")
        
        // console.log(isToongle)
      }else{
        setRating(newRating)
        const isRate = JSON.parse(localStorage.getItem('mydataDetail'));
        const isRate1 = JSON.parse(localStorage.getItem('myData'));
        // console.log(isRate)
        // console.log(isRate1)
        const Formrate = {
          blog_id : isRate.data.id,
          user_id: isRate1.Auth.id,
          rate :newRating
          
        }
        console.log(Rate)
        const accessToken = isRate1.token
        // console.log(accessToken)
        let config = {
          headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          }
        };
  
        axios.post(`http://localhost/laravel8/public/api/blog/rate/`+params.id,Formrate,config)
        .then(respnse=>{
          console.log(respnse)
          if(respnse.data.error){
            alert("Lỗi")
          } else {
            alert("Đã Gửi Đánh Giá")
          }
        })
        .catch(error=>{
          console.error(error)
        })
    }
  }
  useEffect(() => {
    if(isToongle){
      axios.get(`http://localhost/laravel8/public/api/blog/rate/`+params.id)
        .then(res => {
        
         console.log(res.data.data)
         let s = 0;
          Object.keys(res.data.data).map((index , key)=>{
            // console.log(res.data.data[index]["rate"])
            
            s = s + res.data.data[index]["rate"]
            console.log(s)
            
            
          })
          console.log(Object.keys(res.data.data).length)
          console.log(s)
          const tbc = s / Object.keys(res.data.data).length
            console.log(tbc)
            setRating(tbc)
         
          
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [isToongle]);
  
 
    return (
      <StarRatings
        rating={rating}
        starRatedColor="red"
        changeRating={changeRating}
        numberOfStars={6}
        name='rating'
      />
    );
   
} export default Rate