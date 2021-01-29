import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import IconButton from "@material-ui/core/IconButton";
// import DeleteIcon from "@material-ui/icons/Delete";
// import AlarmIcon from "@material-ui/icons/Alarm";
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "red",
    border: "none",
  },
}));

const ButtonTest = () => {
  const classes = useStyles();

  return (
    <Button
      classes={{
        root: classes.root,
      }}
      // className={classes.root}
      variant="outlined"
      color="primary"
      size="small"
    >
      Small button
    </Button>
  );
};

export default ButtonTest;
