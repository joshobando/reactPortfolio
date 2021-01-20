import React from "react";

function contactForm(){

    return(
        <div className="myForm">
            <form id="email-form" action="https://formspress.io/xknqqwdl" method="POST">
                <div>
                    <label for="form-group">Name</label>
                    <input type="text" name="name" className="form-control" id="form-name" placeholder="Your name"></input>
                </div>
                <div className="form-group">
                    <label for="form-email">Email</label>
                    <input type="email" name="replyEmail" className="form-control" id="form-email" placeholder="Your email"></input>
                </div>
                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea className="form-control" name="messageBody" id="form-body" rows="3"></textarea>
                </div>
            </form>
            <center><button type="submit" className="btn btn-secondary btn sm" id="submit">SUBMIT</button></center>
            <p id="form-status"></p>
        </div>
    )
}

export default contactForm();