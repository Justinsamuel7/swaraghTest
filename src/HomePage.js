import React, { useState, useEffect } from 'react';
import './style.css';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';

export default function HomePage() {
  let navigate = useNavigate();
  function logout() {
    localStorage.clear();
  }

  return (
    <>
      <h1>this is home</h1>
      <div>
        <Link to="/Profile">Profile</Link>
        <br />
        <Link to="/AddEnquiry">Add Enquiry</Link>
        <br />
        <Link to="/EnquiryList">See All Enquries</Link>
        <br />
      </div>
      <br />
      <br />
      <div>
        <Link to="/ResetPassword">Reset Password</Link>
        <br />
        <Link to="/LoginForm" onClick={logout}>
          Logout
        </Link>
        <br />
      </div>
    </>
  );
}
