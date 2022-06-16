import React from 'react'

const Contact = () => {
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
                <input type="text" className="form-control" id="firstLastName" name="name" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="phone">Phone number</label>
                <input type="text" className="form-control" id="phone" name="phone" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" id="subject" name="subject" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="subject">Message</label>
                <textarea className="form-control" id="message" name="message"></textarea>
              </div>
                  
              <button type="submit" className="btn btn-primary">Send</button>
            
        </div>

        <div className='col-sm-4'></div>

      </div>

    </div>
  )
}

export default Contact