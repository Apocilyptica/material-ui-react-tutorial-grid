import React from "react";

import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const useStyles = makeStyles({
  typographyStyle: {
    // color: "blue",
  },
  gutterBottom: {
    marginBottom: 0,
  },
});

const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
};

const TypographyTest = () => {
  const classes = useStyles();

  return (
    <Typography
      align="right"
      color="primary"
      gutterBottom
      classes={{
        gutterBottom: classes.gutterBottom,
      }}
      variant="h1"
      className={classes.typographyStyle}
      //   component="div"
      variantMapping={{
        h1: "div",
      }}
    >
      <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
        <p>
          <FormattedMessage id="myMessage" defaultMessage="Today is {ts, date, ::yyyyMMdd}" values={{ ts: Date.now() }} />
          <br />
          {/*eslint-disable-next-line react/style-prop-object*/}
          <FormattedNumber value={19} style="currency" currency="EUR" />
        </p>
      </IntlProvider>
    </Typography>
  );
};

export default TypographyTest;
