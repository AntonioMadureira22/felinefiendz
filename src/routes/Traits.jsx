import React from 'react'

//style sheet
import "../components/traits.css"
//trait images
import trait1 from "../assets/images/friend1.0.png"
import trait2 from "../assets/images/fiend2.0.png"


const traits = () => {
    return (
        <div className='top'>
            <div className='title-nme'>
                <h1>Traits</h1>
            </div>
            <div className='img1'>
                    <img src={trait1} alt='feline fiend 1'/>
                </div>
            <div className='img2'>
                <img src= {trait2} alt='feline fiend 2' />
            </div>
            
        </div>
    )
}

export default traits