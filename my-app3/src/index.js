import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Home';
import List from './compoment/Blog/List';
import Detail from './compoment/Blog/Detail';
import Login from './Member/Login';
// import Index from './Member/Index';
import Account from './compoment/Account/Account';
import Addproduct from './compoment/Product/Addproduct';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <App>
          <Routes>
                
                <Route index path='/' element={<Home/>}/>
                {/* <Route  path='/blog' element={<Blog/>}/> */}
                <Route  path='/login' element={<Login/>}/>
                <Route  path='/blog/list' element={<List/>}/>
                <Route  path='/blog/detail/:id' element={<Detail/>}/>
                <Route  path='/account' element={<Account/>}/>
                <Route  path='/addproduct' element={<Addproduct/>}/>
          </Routes>
        </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
