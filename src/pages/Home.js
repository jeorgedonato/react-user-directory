import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import employees from "../employee.json";

function Home() {
  const [employeeSearch, setEmployeeSearch] = useState("");
  const [employeesArr, setEmployeesArr] = useState(employees);
  const handleChange = (e) => {
    setEmployeeSearch(e.target.value);
    setEmployeesArr(
      employees.filter((ea) => {
        return ea.firstname.search(employeeSearch) >= 0;
      })
    );
  };
  return (
    <>
      <SearchBar value={employeeSearch} handleChange={handleChange} />
      <SearchResults employees={employeesArr} />
    </>
  );
}

export default Home;
