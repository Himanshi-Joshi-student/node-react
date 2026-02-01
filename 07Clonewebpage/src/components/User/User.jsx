import React from "react";
import { useParams } from "react-router-dom";
function User() {
    const {userid}=useParams()
    return (
        <>
        <div className='bg-gray-700 py-5 m-3 text-2xl text-white'>User:{userid}</div>
        </>
    )
}
export default User