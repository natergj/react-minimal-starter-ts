import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MainAppBar: React.FunctionComponent = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography component="div" variant="h6" sx={{ flexGrow: 1 }}>
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

export default MainAppBar;
