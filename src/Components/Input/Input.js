import React, { useState } from 'react'
import Countrydetail from '../countryDetail/Countrydetail';

export default function Input() {
     
    const [country,setCountry]=useState(0);


    const getCountry= (e) =>
    {
console.log(e.target.value);
 let url = `https://restcountries.com/v3.1/name/${e.target.value}`;
fetch(url).then(
    function(response)
    {
        if(!response.ok) throw new Error (`Something went wrong ${response.status}`)
        return response.json();
    })
    .then(
        function(data)
        {
            setCountry(data[0].flag);
        }
    )
    
    .catch((err)=>console.log(err));

    }
  return (
    <div>
        <input type={"text"} onChange={getCountry}/>
        {
           country ? <Countrydetail detail={country}/> : null 
        }
    </div>
  )
}

