import React, { useEffect } from "react";
import { MDCTopAppBar } from "@material/top-app-bar";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import style from "./Navbar.module.scss";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.secondary.main,
  },
}));
const Navbar = () => {
  const classes = useStyles();
  useEffect(() => {}, []);

  return (
    <AppBar className={classes.container} position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          Match Analysis
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
