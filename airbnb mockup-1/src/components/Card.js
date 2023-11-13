import React from 'react';
import Photo from '../images/image 12.png';
import Photo1 from '../images/Star 1.png'
export default function Card(){
    return(
        <div className='card'>
            <img src={Photo} alt='athlete' className='athlete'></img>

            <div className='flex'>
                <img src={Photo1} alt='rating' className='rating'></img>
                <span>5.0</span>
                <span className='gray'>(6) . </span>
                <span className='gray'>USA</span>
            </div>
            
            <p>Life lessons with Katie Zaferes</p>
            <p><span className='bold'>From $136</span>/ person</p>
        </div>
    )
}
