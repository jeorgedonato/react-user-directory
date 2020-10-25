import React, { useState,useEffect } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import employees from "../employee.json";

function Home() {
  const [employeeSearch, setEmployeeSearch] = useState("");
  const [employeesArr, setEmployeesArr] = useState(employees);
  const handleChange = (e) => {
    setEmployeeSearch(e.target.value);
  };

  useEffect(()=> {
    handleResults()
  },[employeeSearch]);
  
  const handleResults = () => {
    if(!employeeSearch){
      setEmployeesArr(employees)
    }else{
      setEmployeesArr(employees.filter((ea,i) => {
        return ea.firstname.concat(" "+ea.lastname).toLowerCase().indexOf(employeeSearch.trim().toLowerCase())   > -1
      }))
    }
  };
  return (
    <>
      <SearchBar value={employeeSearch} handleChange={handleChange} />
      <SearchResults employees={employeesArr} />
    </>
  );
}

export default Home;
