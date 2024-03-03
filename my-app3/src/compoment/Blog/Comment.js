import React, { useState } from "react";
import Erros from "../../Member/Erros";
import axios from "axios";
import Detail from "./Detail";

function Comment(props) {
  const [getComment, setComment] = useState({
    message: ""
  });
  const [error, setErrors] = useState({});
  

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    const isToongle = localStorage.getItem('setisToongle');


    const { listid } = props; 
    console.log(listid);


    if (!isToongle) {
      alert("Vui Lòng Đăng Nhập Trước Khi Bình Luận");
    } else if (getComment.message == "") {
      alert("Vui Lòng Nhập Bình Luận");
    } else {
      //LocoDetail
      const isCommentDetail = JSON.parse(localStorage.getItem('mydataDetail'));
      const isComment = JSON.parse(localStorage.getItem('myData'));

      const accessToken = isComment.token;
     
      let config = {
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      };


      const {listid}=props
      console.log(listid)

      const formData = new FormData();
      formData.append('id_blog', isCommentDetail.data.id);
      formData.append('id_user', isComment.Auth.id);
      // formData.append('id_comment',   0);
      formData.append('id_comment', listid ? listid : 0);
      formData.append('comment', getComment);
      formData.append('image_user', isComment.Auth.avatar);
      formData.append('name_user', isComment.Auth.name);

      axios.post("http://localhost/laravel8/public/api/blog/comment/id", formData, config)
        .then(response => {
          // console.log(response.data.data);
         
          if (response.data.errors) {
            alert("Lỗi");
          } else {
            const data = response.data.data
            props.getCmt(data)
            // console.log(data)
            alert("Đã Gửi Bình Luận");

          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <Erros errors={error} />
      
      <div className="replay-box">
        <div className="row">
          <div className="col-sm-12">
            <h2>Leave a reply</h2>
            <div className="text-area">
              <div className="blank-arrow">
                <label>Your Name</label>
              </div>
              <span>*</span>
              <form onSubmit={handleCommentSubmit}>
                <textarea name="message" rows={11} defaultValue={""} onChange={handleInput} />
                <button type="submit" className="btn btn-primary">
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
