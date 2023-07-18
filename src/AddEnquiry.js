import React, { useState, useEffect } from 'react';
import './style.css';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';

export var enquiriesArrayforgetAll=[]

export default function AddEnquiry() {

  let [formTemp, setformTemp]= useState(
    {
      name:'',
      age:'',
      address:'',
      email:'',
      ph:''
    }
  )

  let [enquiriesArray, setEnquiriesArray] = useState([])


  function handleInputs(e)
  {
    let key=e.target.name
    setformTemp({...formTemp, [key]:e.target.value})
  }
  function submit(e)
  {
    e.preventDefault()
    setEnquiriesArray([...enquiriesArray, formTemp])
    console.log(enquiriesArray)
    enquiriesArrayforgetAll=enquiriesArray
    setformTemp({
      name:'',
      age:'',
      address:'',
      email:'',
      ph:''
    })

  }

  return (
    <>
      <h1>Enquiry Form</h1>

      <form action="" onSubmit={submit}>
        <ul id="formelementul">
          <li><input type="text" Placeholder="Name" value={formTemp.name} name="name" onChange={handleInputs}/></li>
          <li><input type="number" Placeholder="Age" value={formTemp.age} name="age" onChange={handleInputs}/></li>
          <li><input type="text" Placeholder="Address" value={formTemp.address} name="address" onChange={handleInputs}/></li>
          <li><input type="text" Placeholder="Email" value={formTemp.email} name="email" onChange={handleInputs}/></li>
          <li><input type="text" Placeholder="MobileNumber" value={formTemp.ph} name="ph" onChange={handleInputs}/></li>
        </ul>
        <button type="submit">Submit</button>
      </form>

      <br/>
      <br/>
      <Link to="/">Back to Home</Link>

    </>
  );
}
