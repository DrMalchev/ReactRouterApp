import React from "react";
import { useOutletContext } from "react-router-dom"; 

export default function HostVanPricing(){
    const context = useOutletContext()
    return(
        <div className="detailsContainer2">
            <div className="detailsContainer2Vspace">
                <span style={{fontWeight:'bold'}}>${context.price}</span>
                <span>/day</span>
            </div>            
        </div>
    )
}