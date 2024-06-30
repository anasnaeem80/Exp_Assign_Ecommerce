import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Grid,
  Paper,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login successful.");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error during login:", error);
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        setError("User does not exist, please signup.");
      } else {
        setError("Check email and password");
      }
    }
  };

  const handlePasswordReset = async () => {
    setMessage("");
    setError("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent.");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      if (error.code === "auth/user-not-found") {
        setError("User does not exist.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <Container maxWidth='lg' sx={{ mt: 8 }}>
      <Grid container spacing={2} sx={{ minHeight: "calc(100vh - 64px)" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            // backgroundImage: `url('https://source.unsplash.com/random')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid item xs={12} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
              p: 4,
            }}
          >
            <LoginIcon color='primary' sx={{ fontSize: 40 }} />
            <Typography variant='h5' component='h1' sx={{ mb: 2 }}>
              Login
            </Typography>
            <Box component='form' sx={{ width: "100%" }} onSubmit={handleLogin}>
              <TextField
                label='Email'
                fullWidth
                margin='normal'
                variant='outlined'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label='Password'
                type='password'
                fullWidth
                margin='normal'
                variant='outlined'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                sx={{ mt: 2 }}
              >
                Login
              </Button>
              <Button
                fullWidth
                variant='text'
                color='primary'
                sx={{ mt: 2 }}
                onClick={handlePasswordReset}
              >
                Forgot Password?
              </Button>
            </Box>
            {message && (
              <Alert severity='success' sx={{ mt: 2 }}>
                {message}
              </Alert>
            )}
            {error && (
              <Alert severity='error' sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
