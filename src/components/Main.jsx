import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import BooksSection from "./BooksSection";
import BookCard from "./BookCard";
import AddButton from "./AddButton";
import SearchBar from "./SearchBar";
class Main extends React.Component {
  state = {
    searchOpen: false,
    searchBook: "",
    searchedBookData: [],
    currentlyReading: {},
    wantToRead: {},
    read: {},
    allLists: {},
  };

  getData = (data) => {
    this.setState({ searchedBookData: data.docs });
  };

  openSearch = () => {
    this.setState({ searchOpen: true });
  };

  closeSearch = () => {
    this.setState({ searchOpen: false });
    console.log(this.state);
  };

  updateAllLists = (id, newBook) => {
    let newList = { ...this.state.allLists };
    newList[id] = newBook;

    let newCurrentlyReading = {};
    let newWantToRead = {};
    let newRead = {};
    for (let book in newList) {
      let selectedList = newList[book].selectedList;

      if (selectedList === "currentlyReading") {
        newCurrentlyReading[book] = newList[book];
      } else if (selectedList === "wantToRead") {
        newWantToRead[book] = newList[book];
      } else if (selectedList === "read") {
        newRead[book] = newList[book];
      }
    }
    // localStorage.setItem(
    //   "currentlyReading",
    //   JSON.stringify(newCurrentlyReading)
    // );
    // localStorage.setItem("wantToRead", JSON.stringify(newWantToRead));
    // localStorage.setItem("read", JSON.stringify(newRead));
    this.setState({
      allLists: newList,
      currentlyReading: newCurrentlyReading,
      wantToRead: newWantToRead,
      read: newRead,
    });
  };

  render() {
    if (this.state.searchOpen === true) {
      return (
        <div>
          <SearchBar closeSearch={this.closeSearch} getData={this.getData} />
          <Container>
            <Row>
              {this.state.searchedBookData.map((searchBook, index) => (
                <BookCard
                  key={index}
                  id={searchBook.key}
                  cover={searchBook.cover_i}
                  title={searchBook.title}
                  author={searchBook.author_name}
                  updateAllLists={this.updateAllLists}
                  setBookDetails={this.props.setBookDetails}
                  bookDetails={{
                    cover: searchBook.cover_i,
                    title: searchBook.title,
                    author: searchBook.author_name,
                    selectedList: "undefined",
                  }}
                />
              ))}
            </Row>
          </Container>
        </div>
      );
    } else {
      // let currentlyReadingFromStorage = JSON.parse(
      //   localStorage.getItem("currentlyReading")
      // );
      // let wantToReadFromStorage = JSON.parse(
      //   localStorage.getItem("wantToRead")
      // );
      // let readFromStorage = JSON.parse(localStorage.getItem("read"));
      // console.log("currently", currentlyReadingFromStorage);
      // console.log("want", wantToReadFromStorage);
      // console.log("read", readFromStorage);
      return (
        <div>
          <h2 id="main-title" className="text-center ">
            My Reads
          </h2>
          <BooksSection
            title="Currently Reading"
            selectedBookList={this.state.currentlyReading}
            updateAllLists={this.updateAllLists}
            setBookDetails={this.props.setBookDetails}
          />
          <BooksSection
            title="Want To Read"
            selectedBookList={this.state.wantToRead}
            updateAllLists={this.updateAllLists}
            setBookDetails={this.props.setBookDetails}
          />
          <BooksSection
            title="Read"
            selectedBookList={this.state.read}
            updateAllLists={this.updateAllLists}
            setBookDetails={this.props.setBookDetails}
          />
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
export default Main;
