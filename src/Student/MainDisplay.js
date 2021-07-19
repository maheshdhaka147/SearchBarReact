import PersonalInfo from './PersonalInfo'
import Grades from './Grades'
import ShowTags from './ShowTags'
const MainDisplay=({student,average,callBackTagUpdate})=>{
   const tagSubmitHandler=(e)=>{
    e.preventDefault() // Prevent Default form submit behaviour
    callBackTagUpdate(e)
   }
    return(
        <div className="centerdiv">
                        <h1>{`${student.firstName} ${student.lastName}`}</h1>
                        <div className="paddingdiv">
                        {/* Component to show Student Info: email,company,skill,average grades */}
                        <PersonalInfo email={student.email} company={student.company} skill={student.skill}  average={average}/>  
                            {/* Component to show grades */}
                            <Grades id={student.id} grades={student.grades}/>
                            <div>
                                {/* Component to show inserted tags */}
                                <ShowTags tags={student.tags} id={student.id}/>
                                {/* Form to insert a new tag */}
                                <form onSubmit={tagSubmitHandler}>
                                <input type="text" className="searchtag" placeholder="Add a tag" id={`${student.id}_taginput`} required/>
                                </form>
                            </div> 
                        </div>                        
                    </div>
    )
}

export default MainDisplay