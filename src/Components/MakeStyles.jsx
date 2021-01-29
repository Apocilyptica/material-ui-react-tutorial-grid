import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  buttonText: (props) => {
    return {
      color: props.cool ? "blue" : "red",
      [theme.breakpoints.up("sm")]: {
        color: "cyan",
      },
    };
  },
  buttonBackground: (props) => {
    return {
      backgroundColor: props.cool ? "orange" : "yellow",
    };
  },
}));

const MakeStyles = (props) => {
  const classes = useStyles(props);
  return (
    <Button fullWidth className={classNames(classes.buttonText, classes.buttonBackground)}>
      The Button
    </Button>
  );
};

export default MakeStyles;
