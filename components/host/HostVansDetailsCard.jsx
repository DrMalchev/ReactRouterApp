import React from "react";
import { NavLink } from "react-router-dom";

export default function CommonCard(props){
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
            <div className="commonCardLinksContainer">
                <NavLink className='commonCardNavLink'>
                    Details
                </NavLink>
                <NavLink className='commonCardNavLink'>
                    Pricing
                </NavLink>
                <NavLink className='commonCardNavLink'>
                    Photos
                </NavLink>
            </div>
        </div>
    )
}