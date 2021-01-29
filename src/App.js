import React from "react";

// material ui components
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Content from "./Content";
import { Switch, Route } from "react-router-dom";
import MakeStyles from "./Components/MakeStyles";
import ButtonTest from "./Components/ButtonTest";
import TypographyTest from "./Components/TypographyTest";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue, green, purple } from "@material-ui/core/colors";
import Themes from "./Components/Themes";
import DarkMode from "./Components/DarkMode";

// material ui styles

const themeA = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  typography: {
    h1: {
      fontSize: "3em",
    },
  },
});
const themeB = createMuiTheme({
  palette: {
    primary: green,
    secondary: purple,
    type: "dark",
  },
});

const App = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Switch>
            <Route exact path="/" render={() => <Content />} />
            <Route path="/makestyles" render={() => <MakeStyles cool={true} />} />
            <Route path="/button" render={() => <ButtonTest cool={true} />} />

            <Route
              path="/typography"
              render={() => (
                <ThemeProvider theme={themeA}>
                  <TypographyTest />
                </ThemeProvider>
              )}
            />
            <Route
              path="/themes"
              render={() => (
                <ThemeProvider theme={themeB}>
                  <Themes />
                </ThemeProvider>
              )}
            />
            <Route path="/darkmode" render={() => <DarkMode />} />
          </Switch>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
