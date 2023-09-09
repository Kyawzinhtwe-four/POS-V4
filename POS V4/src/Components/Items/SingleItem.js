import classes from "./SingleItem.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const SingleItem = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemDataHandler = () => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
    };
    cartCtx.addItem(item);
  };
  return (
    <div className={classes["item-group"]} onClick={cartItemDataHandler}>
      <div className={classes["item-img"]}>
        <img src="./alcohol.png" alt="" />
      </div>
      <ul className={classes["item-data"]}>
        <li>
          <span> Code </span> <span>: {props.code}</span>
        </li>
        <li>
          <span> Name </span> <span>: {props.name}</span>
        </li>
        <li>
          <span>Price </span> <span>: {props.price}</span>
        </li>
      </ul>
    </div>
  );
};
export default SingleItem;
