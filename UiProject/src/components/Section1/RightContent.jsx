import React from "react";
import RightCard from "./RightCard";

const RightContent=(props)=>{
    return(
        <div className="flex flex-nowrap gap-5 shrink-0  h-full w-3/4 p-6">
            {props.users.map(function(elem,idx){
                return  <RightCard key={idx} id={idx} img={elem.img} />
            })}
       
        </div>
    )
}

export default RightContent