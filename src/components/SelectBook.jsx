import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

class SelectBook extends React.Component {
  state = { bookSelectedObj: {} };

  optionSelected = (value) => {
    let bookSelected = {
      cover: this.props.cover,
      title: this.props.title,
      author: this.props.author,
      selectedList: value,
    };
    this.props.setBookDetails(bookSelected);
    this.setState({ bookSelectedObj: bookSelected });
    console.log("we are in selectBook");
    console.log(this.props);
    this.props.updateAllLists(this.props.id, bookSelected);
  };

  render() {
    return (
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle
          split
          variant="success rounded-circle"
          id="dropdown-split-basic"
          className="fs-6"
        />

        <Dropdown.Menu>
          <Dropdown.Item disabled>Want to...</Dropdown.Item>
          <Dropdown.Item
            value="currentlyReading"
            onClick={() => this.optionSelected("currentlyReading")}
          >
            Currently Reading
          </Dropdown.Item>
          <Dropdown.Item
            value="wantToRead"
            onClick={() => this.optionSelected("wantToRead")}
          >
            Want to Read
          </Dropdown.Item>
          <Dropdown.Item
            value="read"
            onClick={() => this.optionSelected("read")}
          >
            Read
          </Dropdown.Item>
          <Dropdown.Item
            value="none"
            onClick={() => this.optionSelected("none")}
          >
            None
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default SelectBook;
