import { Link } from "react-router-dom"
function Menuacc (){
    return (
       
       
        <div className="col-sm-3">
              <div className="left-sidebar">
                <h2>Account</h2>
                <div className="panel-group category-products" id="accordian">{/*category-productsr*/}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title"><Link to={"/account"} href="#">account</Link></h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                    <h4 class="panel-title"><a href="#">My product</a></h4>
                    </div>
                  </div>
                </div>{/*/category-products*/}
              </div>
            </div>
            
           
    )
}
 export default Menuacc