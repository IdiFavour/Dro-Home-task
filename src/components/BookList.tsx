import React from 'react';

class BookList extends React.Component {
  render() {
    return (
      <div className="BookList mt-5">
        <ul className="list-group">
            <li className="list-group-item">Publisher</li>
            <li className="list-group-item">Publisher</li>
            <li className="list-group-item">ISBN</li>
            <li className="list-group-item">Authors</li>
            <li className="list-group-item">End Date</li>
        </ul>
      </div>
    );
  }
}

export default BookList;