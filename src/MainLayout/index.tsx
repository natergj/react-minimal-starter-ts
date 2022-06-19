import { Box } from "@mui/material";
import MainAppBar from "./MainAppBar";

const MainLayout: React.FunctionComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MainAppBar />
    </Box>
  );
};

export default MainLayout;
