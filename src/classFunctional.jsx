import React from "react-dom";
class Tv {
  constructor(size, brand) {
    this.size = size;
    this.brand = brand;
  }
  nonStaticMethod() {
    return "I have a " + this.size + " " + this.brand + " TV!";
  }
  static staticMethod() {
    return "Do you see the difference";
  }
  static staticField = "beta";
  nonStaticField = "gamma";
}
