import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1content=(props)=>{
    return(
        <div className=" h-[90vh] gap-5  flex items-center justify-between px-16 py-6">
            <LeftContent />
            <RightContent users={props.users} />
        </div>
    )
}


export default Page1content