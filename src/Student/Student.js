import { useState} from "react"
import SearchName from "./SearchName"
import SearchTag from "./SearchTag"
import MyStudent from "./MyStudent"
const Student=({studentData})=>{
    // Assign Tag Property to Objects Inside Array
    let newStudentData=studentData.map(data=>({...data,tags:[]}))
    const [searchPara,setSearchPara]=useState([])
    const [tagSearch,setTagSearch]=useState([])
    // searchChangeHandler and tagChangeHandler function Handle Callback From SearchName and SearchTag Components
    const searchChangeHandler=(value)=>{
        setSearchPara(value)
    }
    const tagChangeHandler=(value)=>{
        setTagSearch(value)
    }
    return(
        <div className="displaycontainer" id="displaycontainer">
            <div className="searchdiv">
                {/* Component To Search By Name */}
                <SearchName callback={searchChangeHandler}/>
                {/* Component To Search By Tag */}
                <SearchTag tagcallback={tagChangeHandler}/>
            </div>
            <div className="studentdisplaydiv">
                {/* Component To Display Filterd Student Data By Name And Tag */}
                <MyStudent studentData={newStudentData} searchPara={searchPara} searchTag={tagSearch}/>
            </div>
        </div>
    )
}

export default Student