import React from "react";

class List extends React.Component {
  //simple
  render() {
    return (
      <div>
        <strong>Usual List</strong>
        <ul className="messages">
          {this.props.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default List;
