import React from 'react'
import { NavLink } from "react-router-dom"

export default function Navigation(){
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return(
        <nav className='mainNav'>   
            <NavLink to='/' className='navHeader'>#VANLIFE</NavLink>
            <div className='linksDiv'> 
                <NavLink style={ (obj) => obj.isActive? activeStyle : null} to='/host'>Host</NavLink> 
                <NavLink style={ (obj) => obj.isActive? activeStyle : null} to='/vans'>Vans</NavLink>
                <NavLink style={ (obj) => obj.isActive? activeStyle : null} to="/about">About</NavLink>
            </div>
        </nav>        
    )
}