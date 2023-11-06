import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

export default function VanDetail(){   
    const params = useParams()
    const [vanData, setVandata] = useState({})
    
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(x => setVandata(x.vans))        
    }, [])
       
    //console.log(vanData)
    return(        
        <div className='detailsContainer'>
            {Object.keys(vanData).length != 0 ? 
            <div>
                <Link className='detailsLink' to='/vans'>Back to all vans</Link>
                <img className='detailsImg'src={vanData.imageUrl} alt="" />
                <div className='detailsType'>{vanData.type}</div>
                <h1 className='detailsName'>{vanData.name}</h1>
                <div className='detailsPrice'><span className='detailsPriceBold'>${vanData.price}</span> /day</div>
                <div className='detailsDescr'>{vanData.description}</div>  
                <div className='detailsButton'>Rent this van</div>          
            </div> : <h3>Loading ...</h3>}
        </div>
    )
}