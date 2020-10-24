import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
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
      </InputGroup>
    </>
  );
}

export default SearchBar;
