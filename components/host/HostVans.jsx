import React from "react";
import VanListCard from "./VanListCard";

export default function HostVans(){

    const [vans, setVans] = React.useState(null)

    React.useEffect(()=>{
        fetch('/api/host/vans')
        .then(res => res.json())
        .then(data => data)
        .then(data => setVans(data.vans))
    },[])
       
    //console.log(vans)
    const vanListCards = vans? vans.map(x => {
        return <VanListCard imageUrl={x.imageUrl} price={x.price} name={x.name} id={x.id} key={x.id} description={x.description}/>
    }) : "Loading..."

    return(
        <div className="vansListContainer">
            <h1>Your listed vans</h1>
            {vans? vanListCards: "Loading..."}
        </div>
    )
}