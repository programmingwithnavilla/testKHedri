import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Domain from "./domain";
import Flower from "./flower";
import { Fruit } from "./fruit";
import { connect } from "react-redux";
import { Tv, Internet } from "./Tv";
import styles from "./App.module.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Domain />
        {/* <Flower flowerName="zanbagh" />
        {Fruit("apple")}
        <div className={styles["class-test"]}>parent class test</div> */}
        {/* {Tv()} */}
        {/* {Internet()} */}
        {/* <h1>welcome Redux {this.props.count}</h1>
        <button
          className="btn btn-secondary"
          onClick={this.props.handleIncrementClick}
        >
          Increment
        </button>
        <button
          className="btn btn-warning"
          onClick={this.props.handleDecrementClick}
        >
          Decrement
        </button> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
    handleDecrementClick: () => dispatch({ type: "DECREMENT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
