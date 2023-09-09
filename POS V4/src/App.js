import ReactDOM from "react-dom";
import Header from "./Components/Layout/Header/Header";
import Helper from "./Components/Layout/Helper/Helper";
import ItemList from "./Components/Items/ItemList";
import Cart from "./Components/Cart/Cart";
import Categories from "./Components/Layout/Category/Categories";
import Total from "./Components/Layout/Total/Total";
import ModalBox from "./Components/UI/ModalBox";
import Backdrop from "./Components/UI/Backdrop";
import "./App.css";
import CartProvider from "./store/CartProvider";
import { useState } from "react";
function App() {
  const [selectCategory, setSelectCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [searchItem, setSearchItem] = useState("All");
  const selectCategoryHandler = (select_cat) => {
    setSelectCategory(select_cat);
  };
  console.log(selectCategory);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  const searchItemHandler = (searchKeyword) => {
    setSearchItem(searchKeyword.target.value);
  };

  const modalElement = document.getElementById("modal");

  return (
    <CartProvider>
      {showModal &&
        ReactDOM.createPortal(
          <Backdrop onHdieModal={hideModalHandler} />,
          modalElement
        )}

      {showModal && ReactDOM.createPortal(<ModalBox />, modalElement)}

      <Header />
      <Helper onSearchItem={searchItemHandler} />
      <main className="main">
        <ItemList select_cat={selectCategory} onShowItemKeyword={searchItem} />
        <Cart />
        <Categories onSelectCatHandler={selectCategoryHandler} />
        <Total onShowModal={showModalHandler} />
      </main>
    </CartProvider>
  );
}

export default App;
