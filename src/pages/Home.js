import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import employees from "../employee.json";

function Home() {
  const [employeeSearch, setEmployeeSearch] = useState("");
  const handleChange = (e) => {
    setEmployeeSearch(e.target.value);
  };

  const [employeesArr, setEmployeesArr] = useState(employees);

  return (
    <>
      <SearchBar value={employeeSearch} handleChange={handleChange} />
      <SearchResults employees={employeesArr} />
    </>
  );
}

export default Home;
