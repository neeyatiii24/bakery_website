import React from "react";
import './Header.css'

function Header(){
    return(
        <>
        <div className="header">
            <h1 className="header-heading">Sugar Bliss</h1>
            <div className="header-navigation"> 
            <a className="header-navigation-sub" href="#">Home </a>
            <a className="header-navigation-sub" href="#">Bestsellers </a>
            <a className="header-navigation-sub" href="#">About </a>
            <a className="header-navigation-sub" href="#">Gallery </a>
            <a className="header-navigation-sub" href="#">Contact </a>
            </div>
            {/* <div className="header-social">
            <i className="header-social-sub" class="fa-solid fa-envelope"></i>
            <i className="header-social-sub" class="fa-brands fa-whatsapp"></i>
            <i className="header-social-sub" class="fa-solid fa-phone"></i>
            <i className="header-social-sub" class="fa-brands fa-instagram"></i>
            <i className="header-social-sub" class="fa-brands fa-youtube"></i>
            <i className="header-social-sub" class="fa-solid fa-map-location-dot"></i>
            </div> */}
 
           
        </div>
        </>
    )
}

export default Header;