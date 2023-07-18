import React, { useState, useEffect } from 'react';
import './style.css';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import HomePage from './HomePage.js';
import Profile from './Profile';
import AddEnquiry from './AddEnquiry';
import EnquiryList from './EnquiryList';
import ResetPassword from './ResetPassword';

export default function App() {
  let userDetails = [
    {
      username: 'justin',
      password: 'Justin8',
    },
    {
      username: 'vini',
      password: 'vini7',
    },
    {
      username: 'jude',
      password: 'jude5',
    },
  ];

  let [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('login')) {
      setIsLogin(true);
    }
  });

  function loginForm() {
    return (
      <>
        <div>
          <input type="text" placeholder="UserName" id="UserName" />
          <br />
          <input type="password" placeholder="Password" id="Password" />
          <br />
          <p id="wrongcre"></p>
          <button onClick={checkPass}>Login</button>
        </div>
      </>
    );
  }

  function checkPass() {
    let uName = document.getElementById('UserName');
    let uPass = document.getElementById('Password');
    let messege = document.getElementById('wrongcre');

    let index = userDetails.findIndex((ele) => ele.username === uName.value);

    if (index >= 0) {
      if (
        userDetails[index].username === uName.value &&
        userDetails[index].password === uPass.value
      ) {
        localStorage.setItem('login', true);
        setIsLogin(true);
      } else {
        messege.innerHTML = 'Invalid Password Entered';
      }
    } else {
      messege.innerHTML = 'User Not Registered';
    }
  }

  function showHomePage() {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/ResetPassword" element={<ResetPassword />}></Route>
          <Route path="/AddEnquiry" element={<AddEnquiry />}></Route>
          <Route path="/EnquiryList" element={<EnquiryList />}></Route>
          <Route path="/LoginForm" element={<App />}></Route>
        </Routes>
      </>
    );
  }

  return <>{isLogin ? showHomePage() : loginForm()}</>;
}
