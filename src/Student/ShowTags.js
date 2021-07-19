const ShowTags=({tags,id})=>{
    return(
        // Render Student Tags
        <div className="tagdisplaydiv">
            {
                tags.map((tag,index)=>
                <span className="tagstyle" key={`${id}_tags_${index+1}`}>{tag}</span>
                )
            }
        </div>
    )
}

export default ShowTags