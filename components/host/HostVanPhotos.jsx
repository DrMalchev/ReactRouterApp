import React from "react";
import { useOutletContext } from "react-router-dom"; 

export default function HostVanPhotos(){
    const context = useOutletContext()
    return( 
        <img className="imagedetail" src={context.imageUrl} alt="" />
    )
}