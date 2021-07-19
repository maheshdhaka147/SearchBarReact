import { useState,useEffect } from "react"
import { FormatString } from "./FormatString"
const SearchTag=({tagcallback})=>{
    const [value,setValue]=useState("")
    useEffect(()=>{
        const searchString=FormatString(value)
        tagcallback(searchString) // Use Callback to send back the searched data to Student Component
    },[value])
        return(
            <input id="searchtag" type="text" placeholder="Search by tag" className="searchbox" value={value} onChange={e=>setValue(e.target.value)}/>
    )
}

export default SearchTag