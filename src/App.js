import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SearchList from './components/SearchList'
import StudList from './components/StudList';
import Student from './components/Student';
import { Liste } from './models/List';
import StudAdd from './components/StudAdd';
import { useState } from "react";
import { List_Task } from './data/List_Task';

function App() {
  const [Student, setStudent] = useState(List_Task);
   const [StudentOrigin, setStudentOrigin] = useState(List_Task);
  
  const addNewTask = (f,l,n,i) => {
    // console.log(f, l, n, i);
    // let newStudent = Student
    // newStudent.push()
    setStudent([...Student, new Liste(Student.length + 1, f, l, n, i)]);
     setStudentOrigin([...Student, new Liste(Student.length + 1, f, l, n, i)]);

     
  }
  const deleteStud = (idtask) => {
    // alert(idtask);
    setStudent ([...Student.filter(t=>t.id != idtask)])
    
  }
  
  const update = (idup, fnup, lnup, nup, imup) => {
    console.log(idup, fnup, lnup, nup, imup);
    //copier la list pred
    let newListTach = Student
    //faire le changement sur la new list
    newListTach.forEach(t => {
      if (t.id == idup) {
        t.fName = fnup
        t.lName = lnup
        t.Note = nup
        t.Image = imup
      }
       setStudent([...newListTach]);
    })
    
  }

  const SearchV = (search) => {

    if (search === "") {
      setStudent([...StudentOrigin]);
    }
    else {
      setStudent([...Student.filter(t => (t.fName.toUpperCase()
        .includes(search.toUpperCase())))])
    }

  }

  return (
    <div id="cont" className="container  ">
      {/* header  search input */}
      <SearchList SearchV={SearchV} />
      {/* StudentList */}
      <StudAdd addNewTask={addNewTask} />
      {/* student */}
      <StudList student={Student} deleteStud={deleteStud} update={update} />
    </div>
  );
}

export default App;
