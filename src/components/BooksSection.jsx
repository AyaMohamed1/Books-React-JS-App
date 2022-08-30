import React from "react";
import BookCard from "./BookCard";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
function BooksSection(props) {
  let books = [];
  for (let book in props.selectedBookList) {
    books.push(
      <BookCard
        key={book}
        id={book}
        cover={props.selectedBookList[book].cover}
        title={props.selectedBookList[book].title}
        author={props.selectedBookList[book].author}
        updateAllLists={props.updateAllLists}
        setBookDetails={props.setBookDetails}
        bookDetails={{
          cover: props.selectedBookList[book].cover,
          title: props.selectedBookList[book].title,
          author: props.selectedBookList[book].author,
          selectedList: props.title,
        }}
      />
    );
  }
  if (true) {
  }
  return (
    <div className="ms-3">
      <h3 className="mb-6p fw-bold">{props.title}</h3>
      <hr className="mt-0" />
      <Container>
        <Row>{books}</Row>
      </Container>
    </div>
  );
}
export default BooksSection;
