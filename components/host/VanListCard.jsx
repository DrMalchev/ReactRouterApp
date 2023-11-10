import React from "react";
import { Link } from "react-router-dom";

export default function VanListCard(props){
    return(
        <Link 
        to={`/host/vans/${props.id}`} 
        key={props.id}
        className="vanListCard">
            <img className="vanListImage" src={props.imageUrl} alt="" />
            <div className="vanListTextDiv">
                <h3 className="vanListh3">{props.name}</h3>                
                <p className="vanListp">${props.price}/day</p>
            </div>            
        </Link>
    )
}