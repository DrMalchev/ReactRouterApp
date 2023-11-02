import React from 'react'
import { Link } from "react-router-dom"

export default function Navigation(){
    return(
        <nav>   
            <Link to='/' className='navHeader'>#VANLIFE</Link>
            <div className='linksDiv'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>        
    )
}