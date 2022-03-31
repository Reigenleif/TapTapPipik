import { useState } from "react";
import style from "./App.module.css";
import BackgroundImage from "./Components/BackgroundImage/BackgroundImage";
import TapTap from "./Components/TapButton/TapTap";
import Title from "./Components/TitleCounterAndNotifBar/Title";
import Counter from "./Components/TitleCounterAndNotifBar/Counter";
import NotifBar from "./Components/TitleCounterAndNotifBar/NotifBar";

function App() {
  const [tapTime, setTapTime] = useState(0);

  const tapHandler = () => {
    setTapTime((prevState) => prevState + 1);
  };

  



  return (
    <div className={style.main}>
      <Title />
      <Counter tapTime={tapTime} />
      <BackgroundImage />
      <TapTap onTap={tapHandler} />
      <NotifBar tapTime={tapTime}/>
    </div>
  );
}

export default App;
