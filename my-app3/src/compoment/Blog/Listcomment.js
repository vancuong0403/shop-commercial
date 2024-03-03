function Listcomment (props){
   const {Listdata}= props
   function handleReply(e) {
    const data1=e.target.id
    // console.log(data1)
    props.getid(data1)
   }
   

   function renderData() {
    if (Listdata && Listdata.length > 0) {
        return Listdata.map((value, key) => {
            if (value.id_comment == 0) {
                return (
                    <li className="media" key={key}>
                      
                        <a className="pull-left" href="#">
                            <img
                                className="media-object"
                                src={"http://localhost/laravel8/public/upload/user/avatar/" + value.image_user}
                                alt=""
                                style={{ width: '130px', height: '80px' }}
                            />
                        </a>
                        <div className="media-body">
                            <ul className="sinlge-post-meta">
                                <li><i className="fa fa-user" />{value.name_user}</li>
                                <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                                <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                            </ul>
                            <p>{value.comment}</p>
                            <a className="btn btn-primary" href id={value.id} onClick={handleReply}><i className="fa fa-reply" />Replay</a>
                        </div>
    
                        {Listdata.map((value2, key2) => {
                            if (value2.id_comment == value.id) {
                                return (
                                  <li className="media second-media">
                                  <a className="pull-left" href="#">
                                  <img
                                className="media-object"
                                src={"http://localhost/laravel8/public/upload/user/avatar/" + value.image_user}
                                alt=""
                                style={{ width: '130px', height: '80px' }}
                            />
                                  </a>
                                  <div className="media-body">
                                    <ul className="sinlge-post-meta">
                                      <li><i className="fa fa-user" />{value2.name_user}</li>
                                      <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                                      <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                                    </ul>
                                    <p>{value2.comment}</p>
                                   
                                  </div>
                                </li>
                                );
                            }
                          
                        })}
                    </li>
                );
            }
           
        });
    }
}


   
    return (
<>

<div className="response-area">
  
          <h2>3 RESPONSES</h2>
          <ul className="media-list">
          {renderData()}  
          </ul>					
        </div> 


</>  
    )
    
} export default Listcomment