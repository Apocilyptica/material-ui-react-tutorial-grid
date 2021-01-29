import React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "linear-gradient(45deg, #FE688B 30%, #FF8E53 90%)",
  },
  button: {
    backgroundColor: "blue",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "black",
    },
  },
}));

const Themes = () => {
  const theme = useTheme();
  const classes = useStyles();
  console.log(theme);

  return (
    <div className={classes.root}>
      <Button className={classes.button} color="primary" variant="contained">
        This is a Button
      </Button>
      <Button color="secondary" variant="contained">
        This is a Button
      </Button>
      <Paper>
        <Typography variant="h1">This is dark mode</Typography>
      </Paper>
    </div>
  );
};

export default Themes;
