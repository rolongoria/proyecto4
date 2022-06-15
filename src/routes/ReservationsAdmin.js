import React, { useEffect, useState } from 'react';
import { collection, doc, setDoc, onSnapshot, deleteDoc, getDoc } from "firebase/firestore";
import { db } from '../firebase.js';

let editId = '';
let editName = '';
let editPhone = '';
let editEmail = '';
let editDate = '';
let editTime = '';

const ReservationsAdmin = () => {

  const [reservations, setReservations] = useState([]);

  const getData = () => {
    const reservationsArr = [];

    onSnapshot(collection(db, 'reservations'), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        reservationsArr.push({...doc.data(), id: doc.id});
        // console.log(reservationsArr);
        setReservations(reservationsArr);
        // console.log(doc.data());
        
      })
    });
  }

  const deleteElement = async (id) => {
    await deleteDoc(doc(db, 'reservations', id));
    getData();
  };

  useEffect(() => {
    getData()
  }, []);


  const getElement = async (id) => {
    console.log(id);
    const docRef = doc(db, "reservations", id);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
      console.log("Document data:", docSnap.data());
      console.log(docSnap.data().name);
      editId = id;
      editName = docSnap.data().name;
      editPhone = docSnap.data().phone;
      editEmail = docSnap.data().email;
      editDate = docSnap.data().date;
      editTime = docSnap.data().time;
      // console.log(editName);
      // console.log(docSnap.data().time);
      getData();

    } else {
      console.log("No such document!");
    }   
  };

  

  const [form, setForm] = useState({});

  const handleChange = (ev) => {
    
    setForm({
      ...form,
      [ev.name]: ev.value,
      
    })
    console.log(form);
  };


  //Update
  const updateElement = async (id) => {
    await setDoc(doc(db, 'reservations', id), form);

      // editId = "";
      // editName = "";
      // editPhone = "";
      // editEmail = "";
      // editDate = "";
      // editTime = "";

    getData();
  }


  // ----------------------------------------------

  return (
    <div className='container reservation-container'>
      <div className='row'>
        <div className='col-sm-1'></div>
        <div className='col-sm-10'>
          <h2>Reservations</h2>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>email</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
            {
            
              reservations.map(reservation => {
                return(
                  <>
                      <tr>
                        <td>{reservation.id}</td>
                        <td>{reservation.name}</td>
                        <td>{reservation.phone}</td>
                        <td>{reservation.email}</td>
                        <td>{reservation.date}</td>
                        <td>{reservation.time}</td>
                        <td>
                          <button type="button" className="btn btn-warning m-1" onClick={() => getElement(reservation.id)}>Edit</button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-danger m-1" onClick={() => deleteElement(reservation.id)}>Delete</button>
                        </td>
                      </tr>
                    


                  </>
                )
              })
            }
              </tbody>
            </table>
          </div>
        </div>
        <div className='col-sm-1'></div>
      </div>



      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>

              <div className="form-group mb-3">
                <label htmlFor="id">ID</label>
                <input type="text" className="form-control" id="id"  name="id" placeholder={editId} disabled />
              </div>
                    
              <div className="form-group mb-3">
                <label htmlFor="firstLastName">First and Last Name</label>
                  <input type="text" className="form-control" id="firstLastName" name="name"  defaultValue={editName} onChange={(e) => handleChange(e.target)}/>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="phone">Phone number</label>
                <input type="text" className="form-control" id="phone" name="phone" defaultValue={editPhone} onChange={(e) => handleChange(e.target)}/>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" defaultValue={editEmail} onChange={(e) => handleChange(e.target)}/>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="date">Select a date</label>
                <input type="date" className="form-control" id="date" name="date" defaultValue={editDate} onChange={(e) => handleChange(e.target)}/>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="date">Select a time (10:00 - 16:00)</label>
                <input type="time" className="form-control" id="time" name="time" min="10:00" max="16:00" defaultValue={editTime} onChange={(e) => handleChange(e.target)}/>
              </div>

              <button type="submit" className="btn btn-primary" onClick={() => updateElement(editId)}>Update reservation</button>

          </div>

        </div>



    </div>
  )
}

export default ReservationsAdmin