import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import MainLayout from "./MainLayout";

const App = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    </CssBaseline>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);
