import { useDispatch } from "react-redux";
import { calculatorActions } from "../store/calculatorRedux";
import { Button } from "@mui/material";

const NumberButton = (props) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(calculatorActions.changeNumber(props.text));
  };

  return (
    <Button
      style={{ boxShadow: "inset -3px -3px 5px rgba(0,0,0,.3)" }}
      variant="contained"
      color="primary"
      onClick={onClickHandler}
    >
      {props.text}
    </Button>
  );
};

export default NumberButton;
