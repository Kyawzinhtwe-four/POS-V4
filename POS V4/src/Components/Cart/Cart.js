import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <div className={classes.cart}>
      <table className={classes["cart-table"]}>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>QTY</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Cart;
