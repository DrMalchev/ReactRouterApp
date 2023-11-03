import React from 'react'
import {Link} from 'react-router-dom'

export default function VanCard(props){
    var color = "E17654"
    if(props.type === 'rugged')
        {
            color="115E59"
        }
    if(props.type === 'luxury')
    {
        color="161616"
    }

    const styles={
        backgroundColor: color
    }
    
    return(
        <Link to={`/vans/${props.id}`} className='vanCard'>
            <img className='vanCardImg' src={props.imageUrl} alt="" />
            <div className='vanCardNamePrice'>
            <h3 className='vanCardName'>{props.name}</h3>
            <p className='vanCardPrice'><span className='priceColor'>${props.price}</span><br/>/day</p>
            </div>            
            <div style={styles}className='vanCardType'>{props.type}</div>
        </Link>
    )
}