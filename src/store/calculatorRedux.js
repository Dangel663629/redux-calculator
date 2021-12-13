import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOne: "0",
  numberTwo: "0",
  currentAction: "undefined",
  touched: true,
  lastTouchedEquals: false,
};

//these reducers suck but im also lazy
const calculatorSlice = createSlice({
  name: "CalculatorSlice",
  initialState,
  reducers: {
    changeNumber(state, action) {
      if (
        state.numberTwo.length > 14 &&
        state.touched === true &&
        state.lastTouchedEquals === false
      ) {
        return;
      }
      if (
        state.numberTwo.toString().includes(".") &&
        action.payload === "." &&
        state.touched === true &&
        state.lastTouchedEquals === false
      ) {
        return;
      }
      if (state.lastTouchedEquals === true) {
        state.currentAction = "undefined";
        state.numberOne = "0";
        state.numberTwo = "0";
        state.lastTouchedEquals = false;
        state.touched = false;
      }
      if (state.touched === true) {
        if (state.numberTwo === "0" && action.payload === ".") {
          state.numberTwo += action.payload;
        } else if (state.numberTwo === "0") {
          state.numberTwo = action.payload;
        } else if (state.numberTwo !== "0" && state.touched === true) {
          state.numberTwo += action.payload;
        }
      } else if (state.touched === false) {
        if (
          state.numberTwo === state.numberOne &&
          action.payload === "." &&
          state.touched === false
        ) {
          state.numberTwo = "0" + action.payload;
          state.touched = true;
          return;
        }
        state.numberTwo = "0";
        state.touched = true;
        state.numberTwo = action.payload;
      }
    },
    changeAction(state, action) {
      if (state.lastTouchedEquals === true) {
        state.numberTwo = state.numberOne;
        state.currentAction = action.payload;
        state.touched = false;
        state.lastTouchedEquals = false;
      }
      if (state.touched === false) {
        state.numberOne = state.numberTwo;
      }
      if (state.touched === true) {
        switch (state.currentAction) {
          case "undefined":
            state.numberOne = state.numberTwo;
            break;
          case "add":
            state.numberOne = +state.numberOne + +state.numberTwo;
            break;
          case "subtract":
            state.numberOne = +state.numberOne - +state.numberTwo;
            break;
          case "multiply":
            state.numberOne = +state.numberOne * +state.numberTwo;
            break;
          case "divide":
            state.numberOne = +state.numberOne / +state.numberTwo;
            break;
          default:
            break;
        }
        state.numberTwo = state.numberOne;
      }
      state.currentAction = action.payload;
      state.touched = false;
      state.lastTouchedEquals = false;
    },
    equals(state) {
      switch (state.currentAction) {
        case "undefined":
          state.numberOne = state.numberTwo;
          break;
        case "add":
          state.numberOne = +state.numberOne + +state.numberTwo;
          break;
        case "subtract":
          state.numberOne = +state.numberOne - +state.numberTwo;
          break;
        case "multiply":
          state.numberOne = +state.numberOne * +state.numberTwo;
          break;
        case "divide":
          state.numberOne = +state.numberOne / +state.numberTwo;
          break;
        default:
          break;
      }
      state.touched = true;
      state.lastTouchedEquals = true;
    },
    backspace(state) {
      if (state.touched === false || state.lastTouchedEquals === true) {
        return;
      }
      if (state.numberTwo.length === 1) {
        state.numberTwo = "0";
      } else {
        state.numberTwo = state.numberTwo.substring(
          0,
          state.numberTwo.length - 1
        );
      }
    },
    clear(state, action) {
      switch (action.payload) {
        case "clearall":
          state.numberOne = "0";
          state.numberTwo = "0";
          state.currentAction = "undefined";
          state.touched = true;
          state.lastTouchedEquals = false;
          break;
        case "clear":
          state.numberTwo = "0";
          if (state.lastTouchedEquals === true) {
            state.numberOne = "0";
            state.currentAction = "undefined";
            state.touched = true;
            state.lastTouchedEquals = false;
          }
          break;
        default:
          break;
      }
    },
    inverse(state) {
      if (state.lastTouchedEquals === true) {
        state.numberOne = -state.numberOne;
      } else {
        state.numberTwo = -state.numberTwo;
      }
    },
  },
});

const store = configureStore({
  reducer: {
    calculator: calculatorSlice.reducer,
  },
});

export const calculatorActions = calculatorSlice.actions;

export default store;
