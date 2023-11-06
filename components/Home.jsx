import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className='home'>
            <div className='homeContainer'>
                <h1 className='homeTexth1'>You got the travel plans, we got the travel vans.</h1>
                <p className='homeTextp'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to='/vans' className='homeButton'>Find your van</Link>
            </div>
        </div>
      
    )
  }