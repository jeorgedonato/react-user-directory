import React, { useState,useEffect } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import employees from "../employee.json";

function Home() {
  let uniqueJob = [];
  employees.map(e => {return e.position}).forEach(eu => {if(!uniqueJob.includes(eu)) {uniqueJob.push(eu)} });
  const [employeeSearch, setEmployeeSearch] = useState("");
  const [employeesArr, setEmployeesArr] = useState(employees);
  // const [employeesJob, setEmployeesJob] = useState("");
  const handleChange = (e) => {
    setEmployeeSearch(e.target.value);
  };

  const handleResults = () => {
    if(!employeeSearch){
      setEmployeesArr(employees);
      // setEmployeesJob(uniqueJob);
    }else{
      setEmployeesArr(employees.filter((ea,i) => {
        return ea.firstname.concat(" "+ea.lastname).toLowerCase().indexOf(employeeSearch.trim().toLowerCase())   > -1 ;
      }))
    }
  };

  const handleJobRes = position => {
    
    setEmployeesArr(employees.filter((ea,i) => {
        return ea.position === position ;
    }))
      // setEmployeeSearch("");
  };

  useEffect(()=> {
    handleResults();
  },[employeeSearch]);
  
  
  return (
    <>
      <SearchBar value={employeeSearch} handleChange={handleChange} job={uniqueJob} handleJobRes={handleJobRes} />
      <SearchResults employees={employeesArr} />
    </>
  );
}

export default Home;
