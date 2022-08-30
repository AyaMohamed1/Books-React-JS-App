import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import SelectBook from "./SelectBook";
function BooksCard(props) {
  let bookDetails = {
    bookDetails: props.bookDetails,
  };
  return (
    <Col xs={2}>
      <div className="card border-white">
        <Link
          to={{
            pathname: "/details",
            state: { bookDetails },
          }}
        >
          <img
            src={`https://covers.openlibrary.org/b/id/${props.cover}-M.jpg`}
            className="card-img-top"
            alt={`${props.title}-book`}
          />
        </Link>
        <div className="arrow d-flex justify-content-end">
          <SelectBook
            id={props.id}
            cover={props.cover}
            title={props.title}
            author={props.author}
            updateAllLists={props.updateAllLists}
            setBookDetails={props.setBookDetails}
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
