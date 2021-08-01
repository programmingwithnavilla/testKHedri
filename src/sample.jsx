import React, { useState } from "react";


const Sample = ({ name }) => {
  let [arr, setArr] = useState([1, 2, 3]);

  const addArray = () => {
    let test = arr;
    test.push(4);
    setArr(test);
  };
  return (
    <diV>
      {arr.map((x) => (
        <div>{x}</div>
      ))}

      <button onClick={addArray}>t</button>
    </diV>
  );
};

export default Sample;
