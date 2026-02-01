import React from "react";

const RightCardContent=(props)=>{
    return(
        <div className="absolute top-0 left-0 w-full h-full rounded-4xl p-10 flex flex-col justify-between">
            <h1 className="bg-white h-10 rounded-full w-10 flex justify-center items-center font-bold">{props.id+1}</h1>
            <div>
                 <p className="mb-5 font-bold text-xl text-gray-900 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas quo hic labore amet laboriosam!</p>
                 <div className="flex justify-between items-center gap-2">
                    <button className="bg-blue-900 text-white rounded-full px-6 py-2">{props.tag}</button>
                  <button className="bg-blue-900 text-white rounded-full px-2 py-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></button>  
                 </div>
                 
            </div>
        </div>
    )
   
}

export default RightCardContent