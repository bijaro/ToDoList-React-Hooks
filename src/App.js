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
    const [Student, setStudent] = useState(List_Task
      // new Liste(
      //   1,
      //   "Lalej",
      //   "Mehdi",
      //   17,
      //   "https://fr.le7tv.ma/wp-content/uploads/2021/10/B3101947-D188-4B35-9343-A9115C3B7096-780x470.jpeg"
      // ),
    );
  
  const addNewTask = (f,l,n,i) => {
    console.log(f, l, n, i);
    // let newStudent = Student
    // newStudent.push()
    setStudent([...Student, new Liste(Student.length + 1, f, l, n, i)]);
     
  }
  const deleteStud = (idtask) => {
    alert(idtask);
    setStudent ([...Student.filter(t=>t.id != idtask)])
    
  }

  return (
    <div id="cont" className="container  ">
      {/* header  search input */}
      <SearchList />
      {/* StudentList */}
      <StudAdd addNewTask={addNewTask} />
      {/* student */}
      <StudList student={Student} deleteStud={deleteStud} />
    </div>
  );
}

export default App;
