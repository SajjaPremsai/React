import React, { useState } from 'react'
import {AsyncPaginate} from 'react-select-async-paginate'
import './Styles/SearchBar.css'
import { LoactionUrl, LocationOptions } from './Api/LocationApi';

export default function SearchBar({onchangedata}) {
  
    const [search,setsearch] = useState(null);

    const Handleonchange = (value)=>{
        setsearch(value);
        onchangedata(value);
    } 

    const dataoptions = async (inputvalue)=>{
        try {   
        const response = await fetch(`${LoactionUrl}/cities?namePrefix=${inputvalue}`, LocationOptions);
	    const result = await response.json();
	    return{
           options: result.data.map((city)=>{
            return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            })
        }
    } catch (error) {
        console.error(error);
    }
}

  return (
    <div className='searchbar'>
        <AsyncPaginate 
        className='bar'
        placeholder="Search for City"
        debounceTimeout={600}
        value={search}
        onChange={Handleonchange}
        loadOptions={dataoptions}
        />
    </div>
  )
}
