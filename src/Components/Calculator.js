import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";
import EqualButton from "./EqualButton";
import SpecialButton from "./SpecialButton";
import classes from "./Calculator.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import reactLogo from "../resources/reacticon.svg";

const Calculator = () => {
  const numberOne = useSelector((state) => state.calculator.numberOne);
  const numberTwo = useSelector((state) => state.calculator.numberTwo);
  const currentAction = useSelector((state) => state.calculator.currentAction);

  const [actionState, setActionState] = useState("");

  useEffect(() => {
    switch (currentAction) {
      case "undefined":
        setActionState("");
        break;
      case "divide":
        setActionState("÷");
        break;
      case "multiply":
        setActionState("×");
        break;
      case "add":
        setActionState("+");
        break;
      case "subtract":
        setActionState("-");
        break;
      default:
        break;
    }
  }, [currentAction]);

  return (
    <div className={classes.container}>
      <div className={classes.statusbar}>
        <img
          src={reactLogo}
          className={classes.reactLogo}
          alt="Logo of React-Redux"
        />
        <p>Redux Calculator</p>
      </div>
      <div className={classes.bottomwrapper}>
        <div className={classes.header}>
          <p className={classes.result}>{numberOne}</p>
          <p>
            {actionState} {numberTwo}
          </p>
        </div>
        <div className={classes.body}>
          <SpecialButton text="CE" action="clear" />
          <SpecialButton text="C" action="clearall" />
          <SpecialButton text="«" action="backspace" />
          <ActionButton text="÷" action="divide" />
          <NumberButton text="7" />
          <NumberButton text="8" />
          <NumberButton text="9" />
          <ActionButton text="×" action="multiply" />
          <NumberButton text="4" />
          <NumberButton text="5" />
          <NumberButton text="6" />
          <ActionButton text="-" action="subtract" />
          <NumberButton text="1" />
          <NumberButton text="2" />
          <NumberButton text="3" />
          <ActionButton text="+" action="add" />
          <SpecialButton text="±" action="inverse" />
          <NumberButton text="0" />
          <NumberButton text="." />
          <EqualButton text="=" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
