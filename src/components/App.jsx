import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import BooksSection from "./BooksSection";
import BooksCard from "./BookCard";
import AddButton from "./AddButton";
import SearchBar from "./SearchBar";
class App extends React.Component {
  state = {
    book: "",
    bookData: [],
    searchOpen: false,
  };

  getData = (data) => {
    console.log(data.docs);
    this.setState({ bookData: data.docs });
  };

  openSearch = () => {
    this.setState({ searchOpen: true });
  };

  closeSearch = () => {
    this.setState({ searchOpen: false });
    console.log(this.state);
  };

  render() {
    if (this.state.searchOpen === true) {
      return (
        <div>
          <SearchBar closeSearch={this.closeSearch} getData={this.getData} />
          <Container>
            <Row>
              {this.state.bookData.map((book, index) => (
                <BooksCard
                  key={index}
                  cover={book.cover_i}
                  title={book.title}
                  author={book.author_name}
                />
              ))}
            </Row>
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <h2 id="main-title" className="text-center ">
            My Reads
          </h2>
          <BooksSection title="Currently Reading" />
          <BooksSection title="Want To Read" />
          <BooksSection title="Read" />
          <AddButton
            iconClass="bi bi-plus-lg"
            fixed="d-flex justify-content-end fixed-bottom"
            moreStyle="fs-4 me-3 mb-4"
            openSearch={this.openSearch}
          />
        </div>
      );
    }
  }
}
export default App;
