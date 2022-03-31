import style from './App.module.css';
import BackgroundImage from "./Components/BackgroundImage/BackgroundImage"
import TapTap from './Components/TapButton/TapTap';

function App() {
  return (
    <div className={style.main}>
      <BackgroundImage/>
      <TapTap/>
    </div>
  );
}

export default App;
