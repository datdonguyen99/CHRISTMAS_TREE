import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import LoginIcon from "@material-ui/icons/AccountCircle";
import LogoutIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: "center",
    },
    link: {
      textDecoration: "none",
      color: "#ffff",
    },
  })
);

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { isLogin } = userLogin;

  useEffect(() => {}, [isLogin]);

  const logoutHandler = async () => {
    dispatch(logout);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          {/* <img src={logo} alt="Kitty Katty!" className={classes.logo} /> */}
          <Typography variant="h6" className={classes.title}>
            Chat with ĐỖ ^_^
          </Typography>
          {!isLogin ? (
            <Button startIcon={<LoginIcon />} color="inherit">
              <Link to="/login" className={classes.link}>
                Log in
              </Link>
            </Button>
          ) : (
            <Button
              startIcon={<LogoutIcon />}
              color="inherit"
              onClick={logoutHandler}
            >
              <Link to="/" className={classes.link}>
                Log out
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
