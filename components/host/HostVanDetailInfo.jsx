import React from "react";
import { useOutletContext } from "react-router-dom"; 

export default function HostVanDetailInfo(){
    const context = useOutletContext()
    //console.log(context)
    return(
        <div className="detailsContainer2">
            <div className="detailsContainer2Vspace">
                <span style={{fontWeight:'bold'}}>Name: </span>
                <span>{context.name}</span>
            </div>
            <div className="detailsContainer2Vspace">
                <span style={{fontWeight:'bold'}}>Category: </span>
                <span>{context.type}</span>
            </div>
            <div className="detailsContainer2Vspace">
                <span style={{fontWeight:'bold'}}>Description: </span>
                <span>{context.description}</span>
            </div>
        
        </div>
    )
}