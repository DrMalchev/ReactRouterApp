import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function(){
    return(
        <div>
            <nav className='hostNav'>
                <Link className='hostNavLink' to='/host'>Dashboard</Link>
                <Link className='hostNavLink' to='/host/income'>Income</Link>
                <Link className='hostNavLink' to='/host/reviews'>Reviews</Link>
            </nav>
            <Outlet/>
        </div>
        )
}