import React, { useState, useEffect } from 'react';
import './style.css';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import enquiriesArrayforgetAll from './AddEnquiry'


export default function EnquiryList() {

  let [arrayofEnquries, setArrayofEnquries] =  useState([])
  useEffect(()=>{
    setArrayofEnquries(enquiriesArrayforgetAll)
  })
  return (
    <>
      <h1>Enquiry List</h1>
      {arrayofEnquries.map((ele, index)=>{
        return(
          <p key={index}>{ele}</p>
        )
      })}



      <br/>
      <br/>
      <Link to="/">Back to Home</Link>

    </>
  );
}
