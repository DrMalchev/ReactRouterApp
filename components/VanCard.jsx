import React from 'react'

export default function VanCard(props){
    return(
        <div>
            <img src={props.imageUrl} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}/day</p>
            <div>{props.type}</div>
        </div>
    )
}