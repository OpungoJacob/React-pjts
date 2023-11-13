import React from "react"
import Airbnb from "../images/Airbnb.png"
export default function Navbar(){
    return(
        <div className="nav">
            <img src={Airbnb} alt="Airbnb logo" className="logo"></img>
        </div>
    )
}