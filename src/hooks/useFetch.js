import {useState, useEffect} from "react";
export const useFetch = ({data,setData}) =>{

    
    const handleFetch = () => {
        fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(data => setData(data.slice(0,100)))
        //.catch((err) => setError(err));
    }
    
    return {data,handleFetch}
}