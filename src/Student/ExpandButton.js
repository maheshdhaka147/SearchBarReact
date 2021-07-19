const ExpandButton=({student})=>{
    // Show and Hide button OnClick handler
    const plusHandler=(e)=>{
        let id=e.target.id.split("_")[0]
        let minusId=`${id}_minussign`
        let gradeId=`${id}_grade`
        document.getElementById(`${id}_plussign`).style.display="none"
        document.getElementById(`${minusId}`).style.display="block"
        document.getElementById(`${gradeId}`).style.display="block"
    }
    const minusHandler=(e)=>{
        let id=e.target.id.split("_")[0]
        let minusId=`${id}_minussign`
        let gradeId=`${id}_grade`
        document.getElementById(`${minusId}`).style.display="none"
        document.getElementById(`${gradeId}`).style.display="none"
        document.getElementById(`${id}_plussign`).style.display="block"
    }
    return(
        <div className="rightdiv">
        {/* Render Show and Hide Button */}
        <button className="plussign" id={`${student.id}_plussign`} onClick={plusHandler}>+</button>
        <button className="minussign displaynone" id={`${student.id}_minussign`} onClick={minusHandler}>-</button>
        </div>
    )
}

export default ExpandButton