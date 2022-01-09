import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SearchList from './components/SearchList'
import StudentList from './components/StudentList';
import Student from './components/Student';
function App() {
  return (
    <div id="cont" className="container  ">
      {/* header  search input */}
      <SearchList />

      {/* StudentList */}
      <StudentList />
      {/* student */}
      <Student />
    </div>
  );
}

export default App;
