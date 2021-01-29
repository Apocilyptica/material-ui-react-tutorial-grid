import React, { useState } from "react";

import { Switch, Grid, Typography, Button, Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const greenTheme = createMuiTheme({
    palette: {
      primary: green,
      secondary: green,
    },
  });

  return (
    <ThemeProvider theme={darkMode ? theme : greenTheme}>
      <Paper style={{ height: "100vh " }}>
        <Grid container direction="column">
          <Typography variant="h1">This is my App!</Typography>
          <Button variant="contained" color="primary">
            This is a button
          </Button>
          <Button variant="contained" color="secondary">
            This is another button
          </Button>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default DarkMode;
