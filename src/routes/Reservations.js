import React from 'react'
import ReserveForm from '../components/ReserveForm'
import '../style-sheets/Reservations.css';

const Reservations = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-sm center-text'>
            <h1>Booking</h1>
          </div>
        </div>

      </div>
      <ReserveForm />
    </>
  )
}

export default Reservations
