import React from 'react';
import {InputGroup,FormControl} from 'react-bootstrap'

function SearchBar(props){
  return(
    <>
    <InputGroup >
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">Enter Employee Name</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl value={props.value} onChange={props.handleChange} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
    </>
  );
}

export default SearchBar;