import { useState } from "react"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
function Login(){
   const [isToongle, setIsToongle]= useState(false)
    function hanldeLoginClick(){
      setIsToongle(!isToongle)
    }
    function hanldeLogoutClick(){
        setIsToongle(!isToongle)
    }
    function renderButton(){
        let button;
        if(isToongle){
            button = <LogoutButton onClick={hanldeLogoutClick}/>
        } else{
            button = <LoginButton onClick={hanldeLoginClick}/>

        }
        return button
    }
    //return sẽ chạy lại khi usestate thay đổi
    return (
        <div>
            {renderButton()}
        </div>
    )
  }
  export default Login