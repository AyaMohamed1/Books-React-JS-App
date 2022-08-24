import React from "react";
class SearchBar extends React.Component {
  state = { name: "", timerId: "", data: [] };

  searchForBook = async () => {
    const result = await fetch(
      `http://openlibrary.org/search.json?q=${this.state.name}`
    );
    const data = await result.json();
    console.log(data);
    this.setState({ data: data });
    this.props.getData(data);
  };

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
    if (this.state.timerId) {
      clearTimeout(this.state.timerId);
    }
    let timerId = setTimeout(() => {
      if (this.state.name) {
        this.searchForBook();
      }
    }, 500);
    this.setState({ timerId: timerId });
    // console.log(this.state.timerId);
  };

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center mt-3">
          <div className="mb-3 ">
            <input
              type="text"
              className="form-control"
              id="SearchBar"
              value={this.state.name}
              onChange={this.onNameChange}
            />
          </div>
          <button
            className="btn btn-danger ms-3 search-btn"
            onClick={() => {
              this.props.closeSearch();
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
export default SearchBar;
