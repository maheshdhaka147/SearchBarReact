const Pic=({pic,firstName})=>{
    return(
        <div className="leftdiv">
            {/* Render Student Pic */}
            <img src={pic} alt={firstName} className="picstyle"/>
        </div>
    )
}

export default Pic