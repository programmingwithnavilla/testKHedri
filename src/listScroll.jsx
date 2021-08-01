import React from "react";

class ListScroll extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps);
    console.log(
      "getSnapshotBeforeUpdate----->this.listRef.current",
      this.listRef.current.scrollHeight,
      this.listRef.current.scrollTop
    );
    // If new items got added, return scroll position
    if (prevProps.items.length < this.props.items.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // if snapshot is available, use it to adjust scroll position
    console.log("componentDidUpdate", prevProps, snapshot);
    console.log(
      "componentDidUpdate----->this.listRef.current",
      this.listRef.current.scrollHeight,
      this.listRef.current.scrollTop,
      snapshot
    );
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    console.log("render");
    return (
      <div>
        <strong>List with Scroll</strong>
        <ul ref={this.listRef} className="messages">
          {this.props.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ListScroll;
