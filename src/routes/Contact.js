import React ,{ useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase.js';



const Contact = () => {

  const [form, setForm] = useState({});

  const handleChange = (ev) => {
    setForm({
      ...form,
      [ev.name]: ev.value,
    })
    console.log(form);
  };


  const handleClick = async () => {
    
    await addDoc(collection(db, 'messages'), form);
    setForm({});
    window.alert("Message sent!!");
    window.location.replace("/");
  
    
  };



  return (
    <div className='container reservation-container'>
      <div className='row'>
        <div className='col-sm center-text'>
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
                    
              <div className="form-group mb-3">
                <label htmlFor="firstLastName">First and Last Name</label>
                <input type="text" className="form-control" id="firstLastName" name="name" onChange={(e) => handleChange(e.target)}/>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="phone">Phone number</label>
                <input type="text" className="form-control" id="phone" name="phone" onChange={(e) => handleChange(e.target)}/>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" onChange={(e) => handleChange(e.target)}/>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" id="subject" name="subject" onChange={(e) => handleChange(e.target)}/>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="subject">Message</label>
                <textarea className="form-control" id="message" name="message" onChange={(e) => handleChange(e.target)}></textarea>
              </div>
                  
              <button type="submit" className="btn btn-primary" onClick={() => handleClick()}>Send</button>
            
        </div>

        <div className='col-sm-4'></div>

      </div>

    </div>
  )
}

export default Contact