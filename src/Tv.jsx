import React from "react";
import { useState } from "react";

export function Tv(props) {
  const [isShow, setIsShow] = useState("use state in tv functinal");
  const toggleConnection = () => {
    setIsShow("test setisshow");
  };
  //   console.log("tv functional component");
  return (
    <div>
      <h2 className="text-info">
        I am Tv functional component that equal{" "}
        <strong className="text-muted">{isShow}</strong>{" "}
      </h2>
      <button className="btn-primary" onClick={toggleConnection}>
        tv toggle
      </button>
    </div>
  );
}

// export function Internet(props) {
//   const [isConnected, setIsConnected] = useState(false);

//   toggleConnection = () => {
//     setIsConnected(!isConnected);
//   };

//   return (
//     <div>
//       <div>{`Internet Connected: ${isConnected}`}</div>
//       <button onClick={toggleConnection}>Toggle Connection</button>
//     </div>
//   );
// }
