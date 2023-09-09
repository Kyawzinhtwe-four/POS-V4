import classes from "./Header.module.css";
import logo from "../../../asses/img/logo-2.png";
import Clock from "./Clock";
const Header = (props) => {
  const mainTitle = "My Grosery Store";
  const now = new Date();
  const date = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    weekday: "short",
  };
  const dateFormat = new Intl.DateTimeFormat("en-Us", date).format(now);
  return (
    <header className={classes.header}>
      <div className={classes.brand}>
        <img
          src={logo}
          alt="My Grosery Store Logo"
          className={classes["logo-img"]}
        />
        <h1 className={classes["main-title"]}>{mainTitle}</h1>
      </div>
      <ul className={classes["date-time"]}>
        <Clock />
        <li>{dateFormat}</li>
      </ul>
    </header>
  );
};
export default Header;
