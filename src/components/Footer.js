import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';

import '../style-sheets/Footer.css';

const Footer = () => {
  return (
    <div className='container mt-5 footer-container'>

        <div className='row'>
          <div className='col-sm-5'></div>
          <div className='col-sm-2 social-media-icons'>

            <a href="https://www.facebook.com/LasPupusasdelItacate/"><BsFacebook size='2em' className='social-media-icons'/></a>
            <a href="https://www.instagram.com/laspupusasdelitacate/"><BsInstagram size='2em' className='social-media-icons'/></a>
            <a href="https://twitter.com/las_pupusas"><BsTwitter size='2em' className='social-media-icons'/></a>
          </div>
          <div className='col-sm-5'></div>
        </div>

        <div className='row'>
          <div className='col-sm-4'></div>
          <div className='col-sm-4 copyright'>
            <p>© Las Pupusas del Itacate. All rights reserved.</p>
          </div>
          <div className='col-sm-4'></div>

        </div>
    </div>
  )
}

export default Footer