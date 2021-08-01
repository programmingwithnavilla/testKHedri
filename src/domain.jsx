import React from "react";
import List from "./list";
import ListScroll from "./listScroll";
// import Tree from "./tree";

class Domain extends React.Component {
  // state = { flower: "" };
  // componentDidMount() {
  //   this.renderTest();
  // }
  // render() {
  //   console.log("oomade component mamooli");
  //   return (
  //     <div>
  //       <h1 className="d-flex">hello {this.props.name}</h1>;<Tree></Tree>
  //     </div>
  //   );
  // }
  // renderTest = () => {
  //   console.log("mikhad setstate she too domain");
  //   this.setState({ flower: "gloriya" });
  // };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Add items</button>
        <button onClick={this.handleReset}>Reset</button>
        <div className="container">
          <List items={this.state.items} />
          <ListScroll items={this.state.items} />
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { items: [1, 2, 3, 4, 5, 6] };
  }

  handleClick = () => {
    const items = this.state.items;
    this.setState({ items: [...items, items.length] });
  };

  handleReset = () => {
    this.setState({ items: [1, 2, 3, 4, 5, 6] });
  };
}
export default Domain;
