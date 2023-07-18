import React, { useState, useEffect } from 'react';
import './style.css';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';

export default function ResetPassword() {



  return (
    <>
      <h1>Reset Password</h1>

      <div>
        <ul id="formelementul">
        <li><input type="password" placeholder="Enter Old Password"/></li>
        <li><input type="password" placeholder="Enter New Password"/></li>
        <li><input type="password" placeholder="ReEnter New Password"/></li>
        <br/>
        <li> <button>Change</button> </li>
        </ul>


      </div>



      <br/>
      <br/>
      <Link to="/">Back to Home</Link>

    </>
  );
}
