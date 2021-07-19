const PersonalInfo=({email,company,skill,average})=>{
    return(
        // Render Student PersonalInfo
        <div>
            <p>Email: {email}</p>
            <p>Company: {company}</p>
            <p>Skill: {skill}</p>
            <p>Average: {average}%</p> 
        </div>
    )
}

export default PersonalInfo