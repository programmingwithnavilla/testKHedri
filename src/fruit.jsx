import React from "react";
// import g from "react-dom";
// const { render } = require("react-dom");

export function Fruit(type) {
  console.log("functional fruit", type);
  return <h3>hey {type}</h3>;
}
