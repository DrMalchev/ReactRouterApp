import React, {useEffect, useState} from 'react'
import VanCard from '/components/VanCard.jsx'

export default function(){

    const [vans, setVans] = useState([])
   
    useEffect(() => {
        fetch('/api/vans')
        .then(response => response.json()
        )
        .then(data => setVans(data))

    },[])    
    
    var vansArray = [];
    if(vans.vans && vans.vans.length)
    {
        vansArray = vans.vans.map(x =>         
        {
            return <VanCard 
            key = {x.id}
            imageUrl={x.imageUrl}
            name = {x.name}
            price = {x.price}
            type = {x.type}
            />
        }) 
    }
    
    return (
        <div className='vansList'>
            <h1>Explore our van options</h1>
            <div className='vansFilters'>
            <div className='filterHeaders'>Simmple</div>
            <div className='filterHeaders'>Luxury</div>
            <div className='filterHeaders'>Rugged</div>
            <div className='clearFilters'>Clear filters</div>
            </div>
            <div className='vansArray'>   
                {vansArray}
            </div>
        </div>
    )
}