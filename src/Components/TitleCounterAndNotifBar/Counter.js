import style from "./Counter.module.css";
import React from "react";
import ReactDOM from "react-dom";
const Counter = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={style.counter}>You have tapped {props.tapTime} times</div>,
        document.getElementById("root2")
      )}
    </React.Fragment>
  );
};

export default Counter