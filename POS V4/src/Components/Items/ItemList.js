import classes from "./ItemList.module.css";
import SingleItem from "./SingleItem";
import DUMMY_ITEMS from "../../asses/DUMMY_ITEMS";
const ItemList = (props) => {
  let itemList;
  if (props.select_cat !== "All") {
    itemList = DUMMY_ITEMS.filter((item) => props.select_cat === item.category);
  } else if (props.onShowItemKeyword !== "All") {
    itemList = DUMMY_ITEMS.filter((item) =>
      item.name.toLowerCase().includes(props.onShowItemKeyword)
    );
  } else {
    itemList = DUMMY_ITEMS.map((item) => item);
  }
  const renderItem = itemList.map((item) => (
    <SingleItem
      code={item.code}
      name={item.name}
      price={item.price}
      id={item.id}
      key={item.id}
    />
  ));

  return <div className={classes["item-list"]}>{renderItem}</div>;
};
export default ItemList;
