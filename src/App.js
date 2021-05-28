import axios from "axios";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

import MatchHistory from "./components/MatchHistory/MatchHistory";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  responsiveFontSizes,
  withStyles,
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Match from "./components/Match/Match";
const App = () => {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: "#212121",
        contrastText: "#fff",
      },
      secondary: {
        main: "#424242",
        contrastText: "#fff",
      },
    },
    typography: {
      fontFamily: ["Roboto Condensed"].join(","),
      button: {
        fontSize: "0.6rem",
        letterSpacing: "0.05em",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
  });
  theme = responsiveFontSizes(theme);

  useEffect(() => {}, []);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home history={props.history}></Home>;
            }}
          ></Route>
          <Route
            path="/match-history/:username/:id"
            render={(props) => {
              return (
                <Match history={props.history} params={props.match}></Match>
              );
            }}
          ></Route>
          <Route
            path="/match-history/:username"
            render={(props) => {
              return (
                <MatchHistory
                  history={props.history}
                  params={props.match}
                ></MatchHistory>
              );
            }}
          ></Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
