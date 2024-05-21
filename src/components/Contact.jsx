import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="conte" id="contact">
            <br/><br/><br/><br/>
            <h2 className="w3-text-light-grey">Contact Me</h2>

            <br/><br/>
            {/* <!-- <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge"> -->
              <!-- <div style="justify-items: center; n-items: center;"> -->
              <!-- <i className="fa fa-facebook-official w3-hover-opacity"></i>
              <i className="fa fa-instagram w3-hover-opacity"></i> -->
              <!-- <i className="fa fa-snapchat w3-hover-opacity"></i> -->
              <!-- <i className="fa fa-github w3-hover-opacity"></i>
              <i className="fa fa-twitter w3-hover-opacity"></i>
              <i className="fa fa-linkedin w3-hover-opacity"></i> -->
            <!-- </div> -->
              <!-- <p className="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" className="w3-hover-text-green">w3.css</a></p> -->
            <!-- End footer -->
            <!-- </footer> --> */}
            {/* <hr className="w3-opacity"/> */}
        
            <div className="w3-section">
              <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Mumbai, Maharashtra </p>
              <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: +91 8085327564</p>
              <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: gaurshubham886@gmail.com</p>
              <p><i className="fa fa-github fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Github: SXUBXAM</p>
              <p><i className="fa fa-linkedin fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> linkedIn: Shubham Gaur </p>
              <p><i className="fa fa-instagram fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> ig: _gaur.sahab</p>
              <p><i className="fa fa-twitter fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> twitter: Shubham</p>
              {/* <!-- <p><i className="fa fa- fa-discord w3-text-white w3-xxlarge w3-margin-right"> </i> </p> --> */}





            </div>
            
<br/><br/>
            <p>Let's get in touch. Send me a message:</p>
        
            <form action="/action_page.php" target="_blank">
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"/></p>
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email"/></p>
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject"/></p>
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message"/></p>
              <p>
                
                <button className="w3-button w3-light-grey w3-padding-large" type="submit">
                  <i className="fa fa-paper-plane"></i> SEND MESSAGE
                </button>
                
              </p>
            </form>
          
          </div></>
  )
}

export default Contact