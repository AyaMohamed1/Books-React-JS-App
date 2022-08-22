import React from "react";
import BooksCard from "./BookCard";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
function BooksSection(props) {
  return (
    <div className="h-32 ms-3">
      <h3 className="mb-6p fw-bold">{props.title}</h3>
      <hr className="mt-0" />
      <Container>
        <Row>hello</Row>
      </Container>
    </div>
  );
}
export default BooksSection;
