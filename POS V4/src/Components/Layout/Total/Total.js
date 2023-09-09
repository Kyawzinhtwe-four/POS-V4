import classes from "./Total.module.css";
import CartContext from "../../../store/cart-context";
import { useContext, useState } from "react";
const Total = (props) => {
  const [returnAmt, setReturnAmt] = useState(0);
  const cartCtx = useContext(CartContext);
  const numberOfCartItem = cartCtx.items.reduce(
    (accr, item) => accr + item.amount,
    0
  );
  const recAmountHandler = (e) => {
    let returnVal = cartCtx.totalAmount - e.target.value;
    setReturnAmt(returnVal);
  };
  return (
    <div className={classes["total-section"]}>
      <div className={classes["total-form"]}>
        <div className={classes["total-data"]}>
          <span>No Of Item : {numberOfCartItem}</span>
          <span>Grand Total : {cartCtx.totalAmount}</span>
        </div>
        <div className={classes["rec-amount"]}>
          <label htmlFor="">Received Amount</label>
          <input type="number" onChange={recAmountHandler} />
        </div>
        <div className={classes["bal-amount"]}>
          <label htmlFor="">Balance Amount</label>
          <input type="number" value={returnAmt} />
        </div>
        <div className={classes["cart-action-btn"]}>
          <button onClick={props.onShowModal}>Pay</button>
        </div>
      </div>
    </div>
  );
};
export default Total;
