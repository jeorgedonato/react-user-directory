import React,{useState} from 'react';
import SearchBar from '../components/SearchBar'
import Employees from '../employee.json';

function Home() {
  const [employeeSearch,setEmployeeSearch] = useState("");
  const handleChange = (e) => {
    setEmployeeSearch(e.target.value);
  }

  return (
    <>
      <SearchBar value={employeeSearch} handleChange={handleChange}/>
      
    </>
  );
}

export default Home;