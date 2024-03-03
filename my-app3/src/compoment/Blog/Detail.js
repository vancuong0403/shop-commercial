import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import Comment from "./Comment";
import Listcomment from "./Listcomment";
import Rate from "./Rate";

function Detail(props){
  
  let params =useParams()
  // console.log(params)
  const [getData ,setData] = useState ([])
  const [getLiscomment, setLiscomment] = useState([]);
  const [listid , setlistid]= useState([])

  useEffect(()=>{
    axios.get(`http://localhost/laravel8/public/api/blog/detail/` +params.id)
    .then(res=>{
      setData(res.data["data"])
      // console.log(res.data["data"])
      setLiscomment(res.data.data.comment);
      
      
      
      const resdataDetail = res.data;
      localStorage.setItem('mydataDetail', JSON.stringify(resdataDetail));
     
    })
    .catch(error=> console.log(error))
  },[])
  function getCmt(data) {
   const a  = getLiscomment.concat(data)
    setLiscomment(a)
  }
  
  function getid(data1) {
   setlistid(data1)
   
  }
  console.log(listid)
  function renderData (){
   return (
    <div className="single-blog-post">
        <h3>{getData.title}</h3>
        <div className="post-meta">
          <ul>
            <li><i className="fa fa-user" /> Mac Doe</li>
            <li><i className="fa fa-clock-o" /> 1:33 pm</li>
            <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
          </ul>
          {/* <span>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </span> */}
        </div>
        <a href>
          <img src={"http://localhost/laravel8/public/upload/Blog/image/"+getData.image} alt="" />
        </a>
        <p>
          {getData.description}</p> <br />
        <div className="pager-area">
          <ul className="pager pull-right">
            <li><a href="#">Pre</a></li>
            <li><a href="#">Next</a></li>
          </ul>
        </div>
      </div>
   )
  }
    return (
   
         
 
        <>
     

        <div className="col-sm-9">
        <div className="blog-post-area">
          <h2 className="title text-center">Latest From our Blog</h2>
        {renderData()}
        </div>{/*/blog-post-area*/}
        <Rate id = {useParams()}/>
        <div className="socials-share">
          <a href><img src="images/blog/socials.png" alt="" /></a>
        </div>{/*/socials-share*/}
      
           < Listcomment Listdata={getLiscomment} getid={getid} />
        {/*/Response-area*/}
        <Comment getCmt={getCmt}
        listid={listid }
         />
      </div>

        </>
    )
} export default Detail