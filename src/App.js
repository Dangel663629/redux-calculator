import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Calculator from "./Components/Calculator";

const custom_theme = createTheme({
  palette: {
    primary: {
      main: "#0288d1",
    },
    secondary: {
      main: "#d17d08",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={custom_theme}>
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
