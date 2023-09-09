import classes from "./Backdrop.module.css";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHdieModal}></div>;
};
export default Backdrop;
