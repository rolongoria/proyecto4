import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Home from './routes/Home';
import Menu from './routes/Menu';
import About from './routes/About';
import Reservations from './routes/Reservations';
import ReservationsAdmin from './routes/ReservationsAdmin';
import NoPage from './routes/NoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="reservation" element={<Reservations />} />
        <Route path="reservationsadmin" element={<ReservationsAdmin />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>


);