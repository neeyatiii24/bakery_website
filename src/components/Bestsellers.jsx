import React from "react";
import './Bestsellers.css';
import x from "../assets/gallery/10.jpg";
import y from "../assets/gallery/11.jpg";
import z from "../assets/gallery/12.jpg";

function Bestsellers(){
    return(
        <>
        <h1 className="section-2-heading">Bestsellers</h1>
        <hr className="section-2-line"/>
        <div className="section-2">
            <div className="section-2-left-card">
                <img className="section-2-left-img" src={x}/>
                <h1 className="section-2-title">Cakes</h1>
            </div>

            <div className="section-2-center-card">
                <img className="section-2-center-img" src={y}/>
                <h1 className="section-2-title">Pastries</h1>
            </div>

            <div className="section-2-right-card">
                <img className="section-2-right-img" src={z}/>
                <h1 className="section-2-title">Donuts</h1>
            </div>
        </div>
        </>
    )
}

export default Bestsellers;




