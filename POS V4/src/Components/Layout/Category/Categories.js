import allCategory from "../../../asses/all_category";
import classes from "./Categories.module.css";
const Categories = (props) => {
  const categorySelectHandler = (e) => {
    e.preventDefault();
    props.onSelectCatHandler(e.target.innerText);
  };
  const catList = allCategory.map((cat) => (
    <button
      className={classes["cat-btn"]}
      key={cat.cat_id}
      onClick={categorySelectHandler}
    >
      {cat.cat_name}
    </button>
  ));
  return (
    <div className={classes.category}>
      <div className={classes["category-list"]}>
        <button className={classes["cat-btn"]} onClick={categorySelectHandler}>
          All
        </button>
        {catList}
      </div>
    </div>
  );
};
export default Categories;
