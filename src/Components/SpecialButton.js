import { calculatorActions } from "../store/calculatorRedux";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

const SpecialButton = (props) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    switch (props.action) {
      case "clear":
        dispatch(calculatorActions.clear("clear"));
        break;
      case "clearall":
        dispatch(calculatorActions.clear("clearall"));
        break;
      case "backspace":
        dispatch(calculatorActions.backspace());
        break;
      case "inverse":
        dispatch(calculatorActions.inverse());
        break;
      default:
        break;
    }
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

export default SpecialButton;
