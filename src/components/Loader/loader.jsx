import React, { useState, useEffect } from "react";
import LoaderTemplate from './template';
import {Navigate} from 'react-router-dom'
 
export default function Loader() {
    const [loading, setLoading] = useState(true);

    // Loading timer in miliseconds
    const timer = 2000;
  
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, timer);
    }, [timer]);
  

    /* If the page is loading, return a loader using the template*/
    if (loading){ 
        return (
        <div className="loader">
            <LoaderTemplate/>
        </div>
        )
    }

    return(
    <>
        <Navigate to='/home'/>
    </>
    )
}