import React, {useEffect, useState} from 'react'
import {useSearchParams, Link} from 'react-router-dom'
import VanCard from '/components/VanCard.jsx'

export default function(){

    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

    useEffect(() => {
        fetch('/api/vans')
        .then(response => response.json()
        )
        .then(data => setVans(data))

    },[])    
        

    var vansArray = [];
    if(vans.vans && vans.vans.length)
    {
        var vansFiltered = typeFilter? vans.vans.filter(x => x.type.toLowerCase() == typeFilter): vans.vans
        vansArray = vansFiltered.map(x =>         
        {
            return <VanCard 
            key = {x.id}
            imageUrl={x.imageUrl}
            name = {x.name}
            price = {x.price}
            type = {x.type}   
            id = {x.id}
            description={x.description}        
            />
        }) 
    }
    
    return (
        <div className='vansList'>
            <h1>Explore our van options</h1>
            <div className='vansFilters'>
            <Link to='?type=simple' className='filterHeaders'>Simple</Link>
            <Link to='?type=luxury' className='filterHeaders'>Luxury</Link>
            <Link to='?type=rugged' className='filterHeaders'>Rugged</Link>
            <Link to='.' className='clearFilters'>Clear filters</Link>
            </div>
            <div className='vansArray'>   
                {vansArray}
            </div>
        </div>
    )
}