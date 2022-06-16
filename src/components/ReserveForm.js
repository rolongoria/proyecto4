import React, {useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase.js';
import '../style-sheets/Reservations.css';





const ReserveForm = () => {

  const [form, setForm] = useState({});

  const handleChange = (ev) => {
    

    setForm({
      ...form,
      [ev.name]: ev.value,
      
    })
    console.log(form);
  };

  const handleClick = async () => {
    
    await addDoc(collection(db, 'reservations'), form);
    setForm({});
    window.alert("Reservation confirmed");
    window.location.replace("/");

    
  };


  return (
    <div className='container reservation-container'>
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
                    
              <div className="form-group mb-3">
                <label htmlFor="firstLastName">First and Last Name</label>
                <input type="text" className="form-control" id="firstLastName" placeholder="Enter your name" name="name" onChange={(e) => handleChange(e.target)}/>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="phone">Phone number</label>
                <input type="text" className="form-control" id="phone" placeholder="Enter your phone" name="phone" onChange={(e) => handleChange(e.target)}/>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" onChange={(e) => handleChange(e.target)}/>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="date">Select a date</label>
                <input type="date" className="form-control" id="date" name="date" onChange={(e) => handleChange(e.target)}/>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="date">Select a time (10:00 - 16:00)</label>
                <input type="time" className="form-control" id="time" name="time" min="10:00" max="16:00" onChange={(e) => handleChange(e.target)}/>
              </div>
          
              
              <button type="submit" className="btn btn-primary" onClick={() => handleClick()}>Book a table</button>


            
        </div>

        <div className='col-sm-4'></div>

      </div>

    </div>
  )
}

export default ReserveForm