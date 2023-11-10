import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function CommonCard(props){
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return(
        <div className="commonCard">
            <div className='commondCardImgNamePrice'>
                <img className='commondCardImg' src={props.imageUrl} alt="" />
                <div className="commonCardText">
                    <div className="commonCardTextType">{props.type}</div>
                    <p className="commonCardTextName">{props.name}</p>
                    <p>${props.price}/day</p>
                </div>
            </div>
            <nav className="commonCardLinksContainer">
                <NavLink to='.' end style={ (obj) => obj.isActive? activeStyle : null} className='commonCardNavLink'>
                    Details
                </NavLink>
                <NavLink to='pricing' style={ (obj) => obj.isActive? activeStyle : null} className='commonCardNavLink'>
                    Pricing
                </NavLink>
                <NavLink to='photos' style={ (obj) => obj.isActive? activeStyle : null} className='commonCardNavLink'>
                    Photos
                </NavLink>
            </nav>
            <Outlet context={props}/>
        </div>
    )
}