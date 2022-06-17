import React from 'react'
import '../style-sheets/Locations.css';

const Locations = () => {
    const addressPharr = "https://maps.google.com/maps?q=las%20pupusas%20del%20itacate%20pharr&t=&z=13&ie=UTF8&iwloc=&output=embed"
    const addressReynosa = "https://maps.google.com/maps?q=las%20pupusas%20del%20itacate%20reynosa&t=&z=13&ie=UTF8&iwloc=&output=embed"

  return (
    <div className='container'>
      {/* Row for title */}
      <div className='row'>
        <div className='col-sm center-text'>
          <h1>Locations</h1>
        </div>
      </div>


      {/* Row to display Maps */}
      <div className='row'>
        <div className='col-sm-1'></div>

        {/* Map for Pharr Location */}
        <div className='col-sm-5 map'>
            <h3>Pharr, TX</h3>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="400" height="300" id="gmap_canvas" 
                        src={addressPharr}
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                    </iframe>
                </div>
                <div className='mt-3 address'>
                  <p><b>807 S. Jackson Rd. Suite 6</b></p>
                  <p><b>Pharr, TX. 78577</b></p>
                  <p>956-715-8024</p>
                  <p>Monday - Closed</p>
                  <p>Tuesday - Sunday</p>
                  <p>8:00am - 4:00pm</p>
              </div>
            </div>
            
        </div>

        {/* Map for Reynosa Location */}
        <div className='col-sm-5 map'>
            <h3>Reynosa, MX</h3>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="400" height="300" id="gmap_canvas" 
                        src={addressReynosa}
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                    </iframe>
                </div>
                <div className='mt-3 address'>
                  <p><b>Matias Canales #703B</b></p>
                  <p><b>Reynosa, MX. 88620</b></p>
                  <p>899-925-12-13</p>
                  <p>Monday - Closed</p>
                  <p>Tuesday - Sunday</p>
                  <p>10:00am - 11:00pm</p>
                </div>
            </div>
            
        </div>

        <div className='col-sm-1'></div>

      </div>


    </div>
  )
}

export default Locations