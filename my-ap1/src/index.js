import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Demo from './Demo';
 import ActionLink from './ActionLink';
import Toongle from './Toongle';
import UserGreeting from './UserGreeting';
import GuestGrrting from './GuestGrrting';
import Login1 from './Login1';
import Warning from './Warning';
import OnKey from './Onkey';
import Numberlist from './Numberlist';
import A from './A';
import C from './C';
import Test from './Form/Test';
import Reservation from './Form/Reservation';
import Login from './Form/Login';
import Register from './Form/Register';
import Registermau from './Form/Registermau';
import LoginRg from './Form/LoginRg';
import Demo1 from './API18/Demo1';
import Post from './API18/Post';
import A1 from './API18/A1';
import A2 from './API18/A2';
import Apida from './API18/Apida';
// function formatName(data){
//   return data.name
// }
// const user = {
//   name : "baovic",
//   age:35
// }
// function getGreeting(user){
//   if(user){
//     return <h1>Hello,{formatName(user)}!</h1>
//   }
//   return <h1>Hello, Stranger</h1>
// }


// let name = "baovic"
// let html = <h1>Đây là : {name}</h1>
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGrrting />;
}
// 
function Mailbox(props){
  const unreadMessages =props.unreadMessages
  return (
    <>
    <h1>Hello</h1>
    {
      unreadMessages.length >0 &&
      <h2>
        You have {unreadMessages.length} unread messages.
      </h2>
    }
    </>
  )
}
const messages = ['cuong', 'vo', 'van',"cfdsf"]
// 
// let xx = "anh thi"
// let obj = {
//   name:"học lập trinh",
//   phone:"1234"
// }

// key 
// const numbers = [1,2,3,4,5]
// const listItemt = numbers.map((numbers)=>
// <li>{numbers}</li>
// )


// 
function NumberList (props){
  const numbers = props.numbers
  const listItemt = numbers.map((value,key)=>
  <li key={key}>
    {value}
  </li>
  )
  return (
    <ul>{listItemt}</ul>
  )
}
const numbers = [7,8,9,10]

// 
const arr= ["Iphone1","Iphone2","Iphone3"]
const objj = {
  name: "baovic",
  age : "36"
}
// 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App  arr={arr}  objj={objj}/> */}
    {/* data1={xx} data2 = "123" data3 = {obj} */}
    {/* <Demo /> */}
  {/* {html} */}
  {/* {getGreeting(user)} */}
  {/* <Welcome/> */}
  {/* <Comment /> */}
  {/* <ActionLink/>
  <Toongle/>
  <Greeting isLoggedIn={false} />
  <Login1/>
  <Mailbox unreadMessages={messages} /> */}
  {/* <Warning/> */}
  {/* <OnKey/> */}
  {/* <ul>{listItemt}</ul> */}
  {/* <NumberList numbers = {numbers} /> */}

  {/* <Numberlist numbers={numbers} /> */}

  {/* <A/> */}
 
  <C/>
  {/* <Test/> */}
{/* <Login/> */}
{/* <Register/> */}
{/* <LoginRg/> */}
{/* <Registermau/> */}
  {/* <Reservation/> */}
  {/* <Demo1/>
  <Post/> */}
  {/* <A1/> */}
  {/* <A2/> */}
  {/* <Apida/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
