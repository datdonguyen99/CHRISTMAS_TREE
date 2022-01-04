import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: "fixed",
      bottom: 0,
    },
    title: {
      flexGrow: 1,
      textAlign: "center",
    },
  })
);

function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary" className={classes.root}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit" className={classes.title}>
            © 2021 ĐỖ copy right
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
