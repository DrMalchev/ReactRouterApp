import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function(){
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return(
        <div>
            <nav className='hostNav'>
                <NavLink end style={(obj) => obj.isActive? activeStyle: null} className='hostNavLink' to='/host'>Dashboard</NavLink>
                <NavLink style={(obj) => obj.isActive? activeStyle: null} className='hostNavLink' to='/host/income'>Income</NavLink>
                <NavLink style={(obj) => obj.isActive? activeStyle: null} className='hostNavLink' to='/host/reviews'>Reviews</NavLink>
                <NavLink style={(obj) => obj.isActive? activeStyle: null} className='hostNavLink' to='/host/vans'>Vans</NavLink>
            </nav>
            <Outlet/>
        </div>
        )
}