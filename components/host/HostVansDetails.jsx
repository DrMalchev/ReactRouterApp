import React, { useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import CommonCard from "./HostVansDetailsCard";

export default function HostVansDetails(){
    const [van, setVan] = React.useState(null)

    const params = useParams()
    
    useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`)
        .then(res => res.json())
        .then(data => data.vans[0])
        .then(data => setVan(data))        
    },[])

    //console.log(van)

    return (        
        <div className="detailsContainer">            
            <Link to='/host/vans'>Back to all vans</Link>
            {van? <CommonCard name={van.name} imageUrl={van.imageUrl} price={van.price} type={van.type}/> : "Loading..."}

        </div>
        
    )
}