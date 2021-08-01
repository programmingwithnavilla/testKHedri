import React from "react";

class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: "6" };
  }
  componentDidMount() {
    this.setState({ test: "9" });
  }
  render() {
    console.log("tree usaul component", this.state.test);
    return <h2>welcome fati</h2>;
  }
}
export default Tree;
