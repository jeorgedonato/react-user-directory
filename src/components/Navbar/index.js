import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Navbars(){
  return (
    <>
      <Navbar bg="light" variant="light">
        <Link to="/" className="navbar-brand" href="#home">Employee Directory</Link>
        <Nav className="mr-auto">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}  href="#home">Home</Link>
          
        </Nav>
      </Navbar>
    </>
  );

};
export default Navbars;