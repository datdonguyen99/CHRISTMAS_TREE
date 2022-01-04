import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import LoginIcon from "@material-ui/icons/AccountCircle";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Image from "../../img/background.jpg";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   backgroundImage: `url(${Image})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  // },
  box: {
    display: "flex",
    border: "1px solid black",
    justifyContent: "space-around",
    alignItems: "center",
    padding: theme.spacing(30),
  },
  link: {
    textDecoration: "none",
  },
}));

function LandingPage({ history }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const classes = useStyles();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      history.push("/chat");
    }
  }, [history, userInfo]);

  return (
    <div className={classes.root}>
      {/* <img src={saigon.jpg} alt="Kitty Katty!" className={classes.logo} /> */}
      <Box className={classes.box}>
        <Link to="/login" className={classes.link}>
          <Button
            startIcon={<LoginIcon />}
            variant="contained"
            size="large"
            color="primary"
          >
            LOGIN
          </Button>
        </Link>

        <Link to="/register" className={classes.link}>
          <Button
            startIcon={<AccountBoxIcon />}
            variant="contained"
            size="large"
            color="secondary"
          >
            REGISTER
          </Button>
        </Link>
      </Box>
    </div>
  );
}

export default LandingPage;
