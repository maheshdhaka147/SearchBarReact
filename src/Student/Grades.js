const Grades=({id,grades})=>{
    return(
        // Render Student Grades
        <div id={`${id}_grade`} className="displaynone">
            {
                grades.map((grade,index)=>
                <p key={`${id}_grades_${index+1}`}>
                    <span>Test {index+1}</span> 
                    <span style={{paddingLeft:20}}>{grade}%</span>
                </p>
                )
            }
        </div> 
    )
}

export default Grades