import React from "react";
import { Link } from "react-router-dom";

// material ui core
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// material ui icons
import Brightness4Icon from "@material-ui/icons/Brightness4";

// material ui styles
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
  linkStyles: {
    margin: 10,
    textDecoration: "none",
    color: "white",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          <Link className={classes.linkStyles} to="/">
            Home
          </Link>
          <Link className={classes.linkStyles} to="/makestyles">
            Make Styles
          </Link>
          <Link className={classes.linkStyles} to="/button">
            Button
          </Link>
          <Link className={classes.linkStyles} to="/typography">
            Typography
          </Link>
          <Link className={classes.linkStyles} to="/themes">
            Themes
          </Link>
          <Link className={classes.linkStyles} to="/darkmode">
            Dark Mode
          </Link>
        </Typography>
        <Brightness4Icon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
