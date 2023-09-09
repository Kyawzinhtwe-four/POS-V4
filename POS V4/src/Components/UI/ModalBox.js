import classes from "./ModalBox.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const ModalBox = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItem = cartCtx.items.reduce(
    (accr, item) => accr + item.amount,
    0
  );
  const totalAmount = cartCtx.totalAmount;
  return (
    <div className={classes.modalBox}>
      <div className={classes["modal-header"]}>
        <h2>Thanks For Buying!</h2>
      </div>
      <div className={classes["modal-body"]}>
        <form action="">
          <div className={classes["label-gp"]}>
            <label htmlFor="">Total Items :</label>
            <input type="text" value={numberOfCartItem} disabled />
          </div>
          <div className={classes["label-gp"]}>
            <label htmlFor="">Total Amount :</label>
            <input type="text" value={totalAmount} disabled />
          </div>
          <button>Confirm</button>
        </form>
      </div>
      <div className={classes["modal-footer"]}>
        <address>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </address>
      </div>
    </div>
  );
};
export default ModalBox;
