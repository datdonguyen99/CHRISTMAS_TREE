import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
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
    width: 400,
    margin: "20px auto",
  },
  avatarStyle: {
    backgroundColor: "#1bbd7e",
  },
  btnstyle: {
    margin: "8px 0",
  },
}));

function RegisterPage({ history }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const phoneRegExp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  const passwordRegExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(4, "Enter longer name").required("required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Enter valid phone number")
      .required("required"),
    password: Yup.string()
      .min(8, "Minimum characters should be 8")
      .matches(
        passwordRegExp,
        "Password must have one upper, lower case, number, special symbol"
      )
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), "Password does not match"])
      .required("required"),
  });

  useEffect(() => {
    // const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);

  const submitHandler = (values, props) => {
    alert(JSON.stringify(values), null, 2);
    // console.log(values.username, values.email, values.password);
    dispatch(
      register(
        values.username,
        values.email,
        values.phoneNumber,
        values.password,
        values.confirmPassword
      )
    );
    // props.resetForm();
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
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2>Register now</h2>
          </Grid>
          <Formik
            initialValues={{
              username: "",
              email: "",
              phoneNumber: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Username"
                  name="username"
                  placeholder="Enter username"
                  fullWidth
                  error={props.errors.username && props.touched.username}
                  helperText={<ErrorMessage name="username" />}
                  required
                />
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
                  label="Phone Number"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  fullWidth
                  error={props.errors.phoneNumber && props.touched.phoneNumber}
                  helperText={<ErrorMessage name="phoneNumber" />}
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
                <Field
                  as={TextField}
                  label="Confirm Password"
                  name="confirmPassword"
                  placeholder="Enter password again"
                  type="password"
                  fullWidth
                  error={
                    props.errors.confirmPassword &&
                    props.touched.confirmPassword
                  }
                  helperText={<ErrorMessage name="confirmPassword" />}
                  required
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  className={classes.btnstyle}
                  fullWidth
                >
                  Register
                </Button>

                <Typography>
                  <Link to="/">Forgot password ?</Link>
                </Typography>
                <Typography>
                  Do you have an account ?<Link to="/login">Log in</Link>
                </Typography>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </div>
  );
}

export default RegisterPage;
