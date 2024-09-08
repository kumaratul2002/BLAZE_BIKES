import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/userActions";
import { Grid, Typography, Button, TextField } from "@mui/material";
import Spinner from "../components/Spinner";
import { message } from "antd";
import logo from "../assets/Logo2.jpg";
import LB from "../assets/LB.png";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      username: values.username,
      password: values.password,
    };
    if (!formData.username || !formData.password) {
      message.error("UserName or Password cannot be empty");
    } else {
      console.log(formData);
      dispatch(userLogin(formData));
    }
  };

  return (
    <div style={{ height: "100vh", overflow: "hidden",padding:"50px", backgroundColor: "#806a6a" }}>
      {loading && <Spinner />}

      <Grid
        container
        style={{
          height: "100vh",
          margin: 0,
        }}
      >
        <Grid
          container
          style={{
            height: "100%",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Left Side Image */}
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{ height: "100%" }}
          >
            <img
              src={LB}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="Background"
            />
          </Grid>

          {/* Right Side Form */}
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              height: "100%",
            }}
          >
            <Grid
              container
              item
              justifyContent="flex-end"
              alignItems="center"
              sx={{ marginBottom: "15px" }}
            >
              <img
                src={logo}
                style={{
                  width: "30%",
                  marginRight: "35%",
                }}
                alt="Logo"
              />
            </Grid>

            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "20px",
                width: "100%", // Ensures the grid takes full width
                maxWidth: "90%", // Keeps form elements within a reasonable width on small screens
              }}
            >
              <Typography variant="h4">User Login</Typography>
              <Typography variant="body1">
                Hey, enter your details to sign in to your account !!
              </Typography>
              <br />
              <form onSubmit={handleSubmit}>
                <TextField
                  type="text"
                  required
                  id="standard-required"
                  label="Username"
                  variant="standard"
                  value={values.username}
                  onChange={handleChange("username")}
                  sx={{ m: 1, width: "25ch" }}
                />
                <br />
                <TextField
                  type="password"
                  id="standard-password-input"
                  autoComplete="current-password"
                  label="Password"
                  variant="standard"
                  value={values.password}
                  required
                  onChange={handleChange("password")}
                  sx={{ m: 1, width: "25ch" }}
                />
                <br />
                <Button type="submit" variant="contained" sx={{ m: 2, width: "30ch" }}>
                  Login
                </Button>
              </form>
              <br />
              <Typography>
                Don't have an account? <Link to="/register">Register Here</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
