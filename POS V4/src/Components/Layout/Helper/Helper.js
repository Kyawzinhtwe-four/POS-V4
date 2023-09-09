import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./Helper.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Helper = (props) => {
  const cartCtx = useContext(CartContext);
  const now = new Date();
  const date = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  const dateFormat = new Intl.DateTimeFormat("en-Us", date).format(now);
  const transitionNumber = Math.round(Math.random() * 100000000);
  return (
    <section className={classes.helper}>
      <div className={classes["help-gp"]}>
        <div className={classes.transition}>
          <label htmlFor="transition-number">Transition Number </label>
          <input type="text" id="transition-number" value={transitionNumber} />
        </div>
        <form action="" className={classes["search-form"]}>
          <label htmlFor="search">
            <button className={classes["search-btn"]}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </label>
          <input type="text" id="search" onChange={props.onSearchItem} />
        </form>
      </div>
      <div className={classes["current-date"]}>
        <span>Date : </span>
        <span>{dateFormat}</span>
      </div>
      <div className={classes["total-amount"]}>
        <span>MMK - {cartCtx.totalAmount}</span>
      </div>
    </section>
  );
};
export default Helper;
