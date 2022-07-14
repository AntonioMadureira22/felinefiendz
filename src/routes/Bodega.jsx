import React from 'react'
import { Link } from 'react-router-dom'


//stylesheet
import "../components/bodega.css"
import "../components/button.css"

//video background
import FiendzVideo2 from "../assets/Bodega Video2_instore.mp4"


const Bodega = () => {


  return (
    <div className='chief'>
      <div className='video2'>
        <video autoPlay muted playsInline src={FiendzVideo2} ></video>
      </div>
      <div className='btn2'>
        <a href='https://discord.com/channels/934616456015007815/953830951811686470' target="_blank" rel='noreferrer'>
          <button className='btn-2'>Click me</button>
        </a>
      </div>
      <div className='btn3'>
        <Link to="/Merch">
          <button>play</button>
        </Link>
      </div>
      <div className='btn4'>
        <Link to="/RoadMap">
          <button className='btn-4'>roadmap</button>
        </Link>
      </div>
      <div className='btn5'>
        <a href='https://opensea.io/collection/felinefiendznft' target="_blank" rel='noreferrer'>
          <button className='btn-5'>opensea</button>
        </a>
      </div>
      <div className='btn6'>
        <Link to="/team">
          <button className='btn-6'>team</button>
        </Link>
      </div>
      <div className='btn7'>
        <Link to="/Nip">
          <button className='btn-7'>$nip</button>
        </Link>
      </div>
      <div className='btn8'>
        <Link to="/traits">
          <button className='btn-8'>Traits</button>
        </Link>
      </div>
      <div className='btn9'>
        <a href='https://twitter.com/FelineFiendz' target="_blank" rel='noreferrer'>
          <button className='btn-9'>Twitter</button>
        </a>
      </div>
    </div>

  )
};


export default Bodega