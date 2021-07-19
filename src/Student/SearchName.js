import { useState,useEffect } from "react";
import {FormatString} from './FormatString'
const SearchName=({callback})=>{
    const [value,setValue]=useState("")
    useEffect(()=>{
        const searchString=FormatString(value)
        callback(searchString) // Use Callback to send back the searched data to Student Component
    },[value])
    return(
            <input type="text" placeholder="Search by name" className="searchbox" value={value} onChange={e=>setValue(e.target.value)}/>
    )
}

export default SearchName;