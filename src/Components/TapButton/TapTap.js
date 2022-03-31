import Before from "./before.png";
import After from "./after.png";
import style from "./TapTap.module.css";
import { useState } from "react";
import SfxPipik from "./SfxPipik.mp3";

const TapTap = (props) => {
  const [tapImg, setTapImg] = useState(Before);
  let resetter = [];

  let SFX = [];
  for (let i = 0; i < 10; i++) {
    SFX.push(new Audio(SfxPipik));
  }

  let soundNumber = 0;

  const tapHandler = () => {
    SFX[soundNumber].play();
    setTimeout(() => {
      setTapImg(After);
      resetter.push(setTimeout(() => setTapImg(Before), 500));
      props.onTap();
      soundNumber++;
    }, 100);
  };

  return (
    <div className={style["button-tap"]} onClick={tapHandler}>
      <img src={tapImg} style={{ height: "80%", width: "80%" }} />
    </div>
  );
};

export default TapTap;
