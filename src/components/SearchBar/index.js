import React from "react";
import { InputGroup, FormControl, Dropdown,DropdownButton } from "react-bootstrap";
import "./style.css";

function SearchBar(props) {
  return (
    <>
      <InputGroup className="searchbar">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">
            Enter Employee Name
          </InputGroup.Text>
        </InputGroup.Prepend>
      
        <FormControl
          value={props.value}
          onChange={props.handleChange}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
        <DropdownButton
          as={InputGroup.Append}
          variant="outline-secondary"
          title="Job Position"
          id="input-group-dropdown-2"
        >
          {props.job.map((j,i) => {
            return <Dropdown.Item key={i} onClick={()=> props.handleJobRes(j)} data-value={j} href="#">{j}</Dropdown.Item>
          })}
        </DropdownButton>
      </InputGroup>
    </>
  );
}

export default SearchBar;
