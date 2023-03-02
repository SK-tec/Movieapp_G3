import React from 'react'
import '../App.css';
import background from '../images/hero.jpg';


export default function Hero() {
    return (
        <>
        <div className ="hero" style ={{backgroundImage:`url(${background})` , height: '500px'}}>
        <div className="hero-text">
        <h1 >MovieBuff</h1> 
        <h2>Stream your favorite movies at the comfort of yourhome</h2>
        <button>Watch now</button>
        </div> 
        </div>
        </>
    );

}

