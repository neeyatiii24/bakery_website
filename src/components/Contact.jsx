import React from "react";
import "./Contact.css";

function Contact(){
    return(
        <>
        <div className="section-5">
            <h1 className="section-5-heading">Contact</h1>
            <hr className="section-5-line"/>
            <h2 className="section-5-content">Tel: 123-456-7890 / Email: info@mysite.com</h2>   
            <input className="section-5-input" placeholder="Name"/>
            <input className="section-5-input" placeholder="Email"/>
            <input className="section-5-input" placeholder="Subject"/>
            <textarea className="section-5-textarea" placeholder="Message"></textarea>
            <button className="section-5-button">Submit</button>
        </div>
        </>
    )
}

export default Contact;