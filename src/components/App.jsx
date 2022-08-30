import React from "react";
import Main from "./Main";
import BookDetail from "./BookDetails";
import { BrowserRouter, Route } from "react-router-dom";
class App extends React.Component {
  state = { bookDetails: {} };

  setBookDetails = (bookDetails) => {
    this.setState({ bookDetails: bookDetails });
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact>
            <Main setBookDetails={this.setBookDetails} />
          </Route>
          <Route path="/details" exact component={BookDetail} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
