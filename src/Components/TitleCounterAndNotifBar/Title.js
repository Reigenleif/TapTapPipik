import style from "./Title.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Title = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<div className={style.title}>PIPIWI</div>,document.getElementById("root2"))}
    </React.Fragment>
  );
};

export default Title;
