import { useDispatch } from "react-redux";
import { calculatorActions } from "../store/calculatorRedux";
import { Button } from "@mui/material";

const EqualButton = (props) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(calculatorActions.equals());
  };

  return (
    <Button
      style={{ boxShadow: "inset -3px -3px 5px rgba(0,0,0,.3)" }}
      variant="contained"
      color="secondary"
      onClick={onClickHandler}
    >
      {props.text}
    </Button>
  );
};

export default EqualButton;
