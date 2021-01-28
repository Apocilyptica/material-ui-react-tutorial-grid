import React from "react";

// material ui core
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// material ui icons
import AcUnitIcon from "@material-ui/icons/AcUnit";

// material ui styles
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>This is our header!</Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
