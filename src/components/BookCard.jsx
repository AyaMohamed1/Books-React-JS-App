import React from "react";
import { Col } from "react-bootstrap";
import AddButton from "./AddButton";
function BooksCard(props) {
  return (
    <Col xs={2}>
      <div className="card border-white">
        <img
          src={`https://covers.openlibrary.org/b/id/${props.cover}-M.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="arrow">
          <AddButton
            iconClass="bi bi-caret-down-fill"
            fixed="d-flex justify-content-end"
            moreStyle="fs-6"
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p id="author" className="card-text text-secondary">
            {props.author}
          </p>
        </div>
      </div>
    </Col>
  );
}
export default BooksCard;
