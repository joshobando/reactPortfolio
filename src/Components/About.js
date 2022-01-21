import React, { Component } from 'react';
import ProfilePic from "../profilepic.jpg";

class About extends Component {
  render() {

    
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={ProfilePic} alt="Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>My name is Joshua Obando, I'm a Front End Developer. Currently looking for work.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Joshua Obando</span><br />
						   <span>Perth Amboy NJ, 08861<br />
                     
                   </span><br />
						   <span>(732)343-5040</span><br />
                     <span>joshua.obando98@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="https://drive.google.com/file/d/1Qy5iOzElBgn_W_7xPC6ZteH8rfet36_e/view?usp=sharing" className="button"><i className="fa fa-download"></i>Checkout My Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
