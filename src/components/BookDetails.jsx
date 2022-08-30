import React from "react";
import { useLocation } from "react-router-dom";
function BookDeatils() {
  const location = useLocation();
  const { bookDetails } = location.state;
  return (
    <div className="Container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-3">
          <img
            src={`https://covers.openlibrary.org/b/id/${bookDetails.bookDetails.cover}-M.jpg`}
            alt={bookDetails.bookDetails.title}
          />
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-8">
              <h2>{bookDetails.bookDetails.title}</h2>
            </div>
            <div className="col-lg-4">
              <p>{bookDetails.bookDetails.selectedList}</p>
            </div>
          </div>
          <p>{bookDetails.bookDetails.author}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
export default BookDeatils;
