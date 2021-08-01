import React from "react";
import { PureComponent } from "react";
import styles from "./flower.module.scss";
class Flower extends PureComponent {
  state = { flower: "banafshe" };
  render() {
    console.log("rneder flower pure component");
    // this.renderTest();
    return (
      <>
        <h4>my flower name is {this.props.flowerName}</h4>
        <div className={styles["class-test"]}>flower color</div>
      </>
    );
  }
  // renderTest = () => {
  //   console.log("call nashode flower");
  //   this.setState({ flower: "gloriya" });
  // };
}
export default Flower;
