import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Cart from './Cart';
import Login from './Login';
import Account from './Account';
import Home from './Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
        <App>
          <Routes>
                
                <Route index path='/' element={<Home/>}/>
                <Route index path='/acciunt' element={<Account/>}/>
                <Route index path='/login' element={<Login/>}/>
                <Route index path='/cart' element={<Cart/>}/>
          </Routes>
        </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();