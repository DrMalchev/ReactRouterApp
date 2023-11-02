import React from 'react'
import { Link } from "react-router-dom"

export default function Navigation(){
    return(
        <nav>
            <h1 className='navHeader'>#VANLIFE</h1>
            <div className='linksDiv'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>        
    )
}