import React from 'react'

export default function VanDetail(props){   
    console.log(props) 
    return(
        <h1>This is van detail page for {props.id}</h1>
    )
}