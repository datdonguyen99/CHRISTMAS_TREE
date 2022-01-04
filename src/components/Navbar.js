import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import LoginIcon from "@material-ui/icons/AccountCircle";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LogoutIcon from "@material-ui/icons/ExitToApp";
import ModalDialog from "./ModalDialog";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          CHAT WITH ĐỖ
        </Typography>
        <Button startIcon={<LoginIcon />} color="inherit" onClick={handleOpen}>
          Register
        </Button>
        <Button startIcon={<AccountBoxIcon />} color="inherit" onClick={handleOpen}>
          Log in
        </Button>
        <Button startIcon={<LogoutIcon />} color="inherit" onClick={handleOpen}>
          Log out
        </Button>
      </Toolbar>
      <ModalDialog open={open} handleClose={handleClose} />
    </AppBar>
  );
};

export default Navbar;
