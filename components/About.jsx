import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
    return (
        <div className='aboutContainer'>
            <img className='aboutImage' src={'/images/image54.png'}/>
            <div className='aboutMain'>
            <h1 className='abouth1'>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p className='abouth2'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)

Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            <div className='aboutLow'>   
                <p className='aboutLow2'>Your destination is waiting.
Your van is ready.</p>
            <Link to='/vans' className='aboutButton'>Explore our vans</Link>
            </div>
            </div>
      
      </div>
    )
  }