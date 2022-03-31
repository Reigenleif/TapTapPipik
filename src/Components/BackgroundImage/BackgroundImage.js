import logo from "../../logo-sma.png";
import reactDOM from "react-dom";
import style from "./BackgroundImage.module.css";

const Logo = () => {
  return <img src={logo} className={style.image} />;
};

const BackgroundImage = (props) => {
  return (
    <div>
      {reactDOM.createPortal(<Logo />, document.getElementById("logo-root"))}
    </div>
  );
};

export default BackgroundImage;
