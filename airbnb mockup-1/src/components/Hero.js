import React from "react";
import Photo from "../images/Photo-grid.png";

export default  function Hero(){
    return(
        <div className="hero">
            <img src={Photo} alt="grid" className="grid"></img>

            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </div>
    )
}
