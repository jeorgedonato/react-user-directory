import React from "react";
import { Container, Card } from "react-bootstrap";
import "./style.css";

const SearchResults = (props) => {
  return (
    <>
      <Container>
        {props.employees.map((e) => {
          return (
            <Card key={e.id} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  {e.firstname} {e.lastname}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {e.position}
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default SearchResults;
