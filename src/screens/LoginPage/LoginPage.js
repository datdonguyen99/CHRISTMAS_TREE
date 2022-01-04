import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  loadingIcon: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    padding: theme.spacing(3),
  },
  paperStyle: {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
  },
  avatarStyle: {
    backgroundColor: "#1bbd7e",
  },
  btnstyle: {
    margin: "8px 0",
  },
}));

function LoginPage({ history }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter valid email").required("Required"),
    password: Yup.string()
      .min(8, "Minimum characters should be 8")
      .required("Required"),
  });

  useEffect(() => {
    // const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      history.push("/chat");
    }
  }, [history, userInfo]);

  const submitHandler = (values, props) => {
    // alert(JSON.stringify(values), null, 2);
    // console.log(values.email, values.password);
    dispatch(login(values.email, values.password));
    props.resetForm();
  };

  return (
    <div className={classes.root}>
      <div className={classes.loadingIcon}>
        {error}
        {loading && <CircularProgress color="secondary" />}
      </div>
      <Grid>
        <Paper elevation={10} className={classes.paperStyle}>
          <Grid align="center">
            <Avatar className={classes.avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Log in</h2>
          </Grid>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Email"
                  name="email"
                  placeholder="Enter email"
                  fullWidth
                  error={props.errors.email && props.touched.email}
                  helperText={<ErrorMessage name="email" />}
                  required
                />

                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  fullWidth
                  error={props.errors.password && props.touched.password}
                  helperText={<ErrorMessage name="password" />}
                  required
                />
                <FormControlLabel
                  control={<Checkbox name="checkedB" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  className={classes.btnstyle}
                  fullWidth
                >
                  Log in
                </Button>

                <Typography>
                  <Link to="/">Forgot password ?</Link>
                </Typography>
                <Typography>
                  Do you have an account ?<Link to="/register">Register</Link>
                </Typography>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </div>
  );
}

export default LoginPage;
