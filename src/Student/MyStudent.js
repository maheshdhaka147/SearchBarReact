import { useState} from "react"
import Pic from "./Pic"
import MainDisplay from "./MainDisplay"
import ExpandButton from "./ExpandButton"
import { IsNameFound,IsTagFound } from "./IsFound"
const MyStudent=({studentData,searchPara,searchTag})=>{
    const [updatedStudentData,setUpdatedStudentData]=useState(studentData)
    // average function is used to calculate average of grades
    const average = (arr) => {
        let sum=0
        for(let element of arr){
            sum+=parseInt(element)
        }
        return sum/arr.length
    } 

    // tagSubmitHandler functions handles data when a tag get inserted
    const tagSubmitHandler=(e)=>{
        let id=e.target[0].id.split("_")[0]
        let value=e.target[0].value
        let splittedValue=value.split(" ")
        let splittedArr=[]
        for(let element of splittedValue){
            // To Ensure First Character of every word is UpperCase and other chars are LowerCase
            splittedArr.push(`${element.charAt(0).toUpperCase()}${element.slice(1).toLowerCase()}`)
        }
        let updatedValue=splittedArr.join(" ")
        let newStudentData=studentData.map(data=>{
            if(data.id===id){
                // Push Data In the Tags Array
                data.tags.push(updatedValue)
            }
            return data
        })
        console.log(newStudentData)
        setUpdatedStudentData(newStudentData)
        document.getElementById(e.target[0].id).value=''
    }
    return(
        // Render Student Data
        updatedStudentData.map(student=>{
            return IsNameFound(student.firstName,student.lastName,searchPara) && IsTagFound(student.tags,searchTag)?
            <div key={student.id} className="studentdiv">
                    {/* Student Picture Component */}
                    <Pic pic={student.pic} firstName={student.firstName}/>
                    {/* Student Grades Component */}
                    <MainDisplay student={student} studentData={studentData} average={average(student.grades)} callBackTagUpdate={tagSubmitHandler}/>
                    {/* Show and Hide grades buttons Component */}
                    <ExpandButton student={student}/>
            </div>:
            ""
        })
    )
}

export default MyStudent