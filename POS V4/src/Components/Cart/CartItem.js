import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const removeCartItemHandler = () => {
    const item = {
      item: props.id,
      name: props.name,
      price: props.price,
    };
    cartCtx.removeItem(props.id);
  };
  const price = props.amount * props.price;
  return (
    <tr className={classes["cart-data"]} onClick={removeCartItemHandler}>
      <td>{props.name}</td>
      <td>{props.amount}</td>
      <td>{price}</td>
    </tr>
  );
};
export default CartItem;
