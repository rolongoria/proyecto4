import React from 'react'
import ReserveForm from '../components/ReserveForm'
import { db } from '../firebase.js';
import '../style-sheets/Reservations.css';

const Reservations = () => {
  return (
    <ReserveForm />
  )
}

export default Reservations
