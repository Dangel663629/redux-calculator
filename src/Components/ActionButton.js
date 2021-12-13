import { useDispatch, useSelector } from "react-redux";
import { calculatorActions } from "../store/calculatorRedux";
import { Button } from "@mui/material";
import classes from "./ActionButton.module.css";
import { useEffect, useState } from "react";

const ActionButton = (props) => {
  const [activity, setActivity] = useState(false);

  const dispatch = useDispatch();
  const currentAction = useSelector((state) => state.calculator.currentAction);

  const onClickHandler = () => {
    dispatch(calculatorActions.changeAction(props.action));
  };

  useEffect(() => {
    if (currentAction.toString() === props.action) {
      setActivity(true);
    }
    return () => {
      setActivity(false);
    };
  }, [currentAction, props.action]);

  const style = activity
    ? `${classes.innerwrapactive}`
    : `${classes.innerwrap}`;

  return (
    <Button
      style={{ boxShadow: "inset -3px -3px 5px rgba(0,0,0,.3)" }}
      variant="contained"
      color="secondary"
      onClick={onClickHandler}
    >
      <div className={classes.buttonwrap}>
        <div className={classes.outerwrap}>
          <div className={style} />
        </div>
        <div className={classes.text}>{props.text}</div>
      </div>
    </Button>
  );
};
export default ActionButton;
