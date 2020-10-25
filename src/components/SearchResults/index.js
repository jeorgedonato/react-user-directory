import React from "react";
import { Container, Card } from "react-bootstrap";
import "./style.css";

const SearchResults = (props) => {
  const bg = ['primary','secondary','success','info','dark'];
  return (
    <>
      <Container>
        {props.employees.map((e) => {
          return (
            <Card bg={bg[Math.floor(Math.random() * 5)]} className="text-white" key={e.id} style={{ width: "18rem" }}>
              <Card.Header ><h5> {e.firstname} {e.lastname}</h5></Card.Header>
              <Card.Body>
                <Card.Title>
                 {e.position}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-white">
                  Salary: $ {e.salary}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default SearchResults;
