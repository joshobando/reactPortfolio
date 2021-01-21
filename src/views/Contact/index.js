import React from "react";
import ContactForm from "../../components/ContactForm";
import socialLinks from "../../components/socialLinks";
import "./style.css";

function Contact(){
    return(
        <div className="viewFive" id="contact">
            <div className="row contact-row">
                <div className="formDiv" id="contact">
                    <h3 className="viewTitle" id="contactTitle">
                        LET'S TALK
                    </h3>

                    <hr></hr>
                    <socialLinks/>
                </div>
            </div>
        </div>
    );
}

export default Contact;