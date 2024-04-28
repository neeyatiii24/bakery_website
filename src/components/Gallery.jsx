import React from "react";
import './Gallery.css'
import a from '../assets/gallery/1.jpg';
import b from '../assets/gallery/2.jpg';
import c from '../assets/gallery/3.jpg';
import d from '../assets/gallery/4.jpg';
import e from '../assets/gallery/5.jpg';
import f from '../assets/gallery/6.jpg';
import g from '../assets/gallery/7.jpg';
import h from '../assets/gallery/8.jpg';
import i from '../assets/gallery/9.jpg';

function Gallery(){
    return(
        <>
        <h1 className="section-4-heading">Gallery</h1>
        <hr className="section-4-line"/>
        <div className="section-4">
            <img className="section-4-left" src={a}/>
            <img className="section-4-center" src={b}/>
            <img className="section-4-right" src={c}/>
        </div>

        <div className="section-4">
            <img className="section-4-left" src={d}/>
            <img className="section-4-center" src={e}/>
            <img className="section-4-right" src={f}/>
        </div>

        <div className="section-4">
            <img className="section-4-left" src={g}/>
            <img className="section-4-center" src={h}/>
            <img className="section-4-right" src={i}/>
        </div>
        
        </>
    )
}

export default Gallery;