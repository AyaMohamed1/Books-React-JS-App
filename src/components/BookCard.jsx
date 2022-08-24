import React from "react";
import { Col } from "react-bootstrap";
import SelectBook from "./SelectBook";
class BooksCard extends React.Component {
  render() {
    return (
      <Col xs={2}>
        <div className="card border-white">
          <img
            src={`https://covers.openlibrary.org/b/id/${this.props.cover}-M.jpg`}
            className="card-img-top"
            alt={`${this.props.title}-book`}
          />
          <div className="arrow d-flex justify-content-end">
            <SelectBook
              id={this.props.id}
              cover={this.props.cover}
              title={this.props.title}
              author={this.props.author}
              updateAllLists={this.props.updateAllLists}
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p id="author" className="card-text text-secondary">
              {this.props.author}
            </p>
          </div>
        </div>
      </Col>
    );
  }
}
export default BooksCard;
