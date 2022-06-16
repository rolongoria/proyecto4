import React from 'react'
import Menu1 from '../images/menu1.png';
import Menu2 from '../images/menu2.png';
import Menu3 from '../images/menu3.png';
import Menu4 from '../images/menu4.png';

import '../style-sheets/Menu.css';

const Menu = () => {
    return (
        <div className='container'>

          <div className='row'>
            <div className='col-sm center-text'>
              <h1>Our Menu</h1>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-8 center-text'>
              <img src={Menu1}></img>        
            </div>
            <div className='col-sm-2'></div>
          </div>

          <div className='row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-8 center-text'>
              <img src={Menu2}></img>        
            </div>
            <div className='col-sm-2'></div>
          </div>

          <div className='row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-8 center-text'>
              <img src={Menu3}></img>        
            </div>
            <div className='col-sm-2'></div>
          </div>

          <div className='row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-8 center-text'>
              <img src={Menu4}></img>        
            </div>
            <div className='col-sm-2'></div>
          </div>
    
          
        </div>
      )
}

export default Menu