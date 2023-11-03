import React from 'react'
import { useParams } from 'react-router-dom'

export default function VanDetail(){   
    const params = useParams()
    console.log(params)
    return(
        <h1>This is van detail page for {params.id}</h1>
    )
}