import React, { useState, useEffect } from "react";
import LoaderTemplate from './template';
 
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
    
    /* CSS to force application to show again once the page has already loaded*/
    const css = `
    .App {
        display: block !important;
    }
    `
    return <style>{css}</style>
}