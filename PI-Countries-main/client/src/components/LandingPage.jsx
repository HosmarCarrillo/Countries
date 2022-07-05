import React from 'react';
import {Link} from 'react-router-dom';
import viajar from "../pictures/viajar.jpg"

export default function LandingPage(){
    return(
        <header className='hero' >
        <div className='texto hero' >
            <h1>Bienvenidos</h1>
            <p>Proyecto Individual</p>
            <Link to ='/home'>
                <button>Ingresar</button>
            </Link>
            <img src={viajar} alt='' ></img>
        </div>
        </header>
    )
}