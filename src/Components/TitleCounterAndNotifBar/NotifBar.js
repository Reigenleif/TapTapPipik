import style from "./NotifBar.module.css";
import { useState } from "react";
import react from "react";
import reactDOM from "react-dom";

const NotifBa = (props) => {
  return <div className={style.notifbar}>{props.text}</div>;
};

const NotifBar = (props) => {
  // milestones
  const milestones = [10, 30, 69, 420, 1000];
  // milestone messages
  const milestonemessages = [
    "Selamat, anda telah menjadi pipik fans",
    '"Teruslah melangkah" -pipik-',
    "OMEGALUL, kamu telah menjadi pipik fanboy++",
    "Kerja bego, jangan mikirin pipik mulu",
    "LUL, you are nolep",
  ];

  let notifMSG
  for (let i = 0; i < milestones.length; i++) {
    if (milestones[i] <= props.tapTime && milestones[i+1] >= props.tapTime) {
      notifMSG = milestonemessages[i]
      break;
    }
  }
  return (
    <react.Fragment>
      {reactDOM.createPortal(<NotifBa text={notifMSG}/>, document.getElementById("root2"))}
    </react.Fragment>
  );
};

export default NotifBar;
