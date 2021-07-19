import { useState,useEffect } from 'react'; // Use Hooks
import Student from './Student/Student';
import './CSS/Google_Font_Raleway.css';
import './CSS/App.css'

function App() {
  const [isLoading,setIsLoading]=useState(true)
  const [studentData,setStudentData]=useState([])
  // Fetch Data using fetch()
  useEffect(()=>{
    fetch("https://api.hatchways.io/assessment/students")
    .then(data=>data.json())
    .then(data=>{
      setStudentData(data)
      setIsLoading(false)
    })
  },[])
  return (
    <div className="App">
        { // Show Data, once become available
          isLoading?"":<Student studentData={studentData.students}/>
        }
    </div>
  );
}

export default App;
