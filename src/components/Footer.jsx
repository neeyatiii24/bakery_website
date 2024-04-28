import React from "react";
import "./Footer.css";


function Footer(){
    return(
        <>
        <div className="section-6">

        <div className="footer-1">
            <h1 className="section-6-heading-1">Come Say Hi</h1>
            <h2 className="section-6-content-1">Mon - Fri: 8am - 8pm</h2>
            <h2 className="section-6-content-1">Saturday: 9am - 7pm</h2>
            <h2 className="section-6-content-1">Sunday: 9am - 8pm</h2>
        </div>


        <div className="footer-2">
            <h1 className="section-6-heading-2">Address</h1>
            <h2 className="section-6-content-2">500 Terry Francine Street</h2>
            <h2 className="section-6-content-2">San Francisco, CA 94158</h2>
            <hr className="section-6-line-2"/>
            <h2 className="section-6-content-2">123-456-7890</h2>
            <h2 className="section-6-content-2">info@mysite.com</h2>
        </div>


        <div className="footer-3">
            <h1 className="section-6-heading-3">Stay on the Sweet Side</h1>
            <input className="section-6-content-3" placeholder="Enter your email here*"/>
            <button className="section-6-button-3">Subscribe Now</button>
        </div>


        <div className="footer-4">
            <h1 className="section-6-heading-4">Social Media</h1>
            <div className="section-6-i-4">
            <i class="fa-solid fa-envelope"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-solid fa-phone"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-solid fa-map-location-dot"></i>
            </div>
        </div>
        
        </div>
        <h4>© 2024 by 15 A.D.</h4>
        
        </>
    )
}

export default Footer;