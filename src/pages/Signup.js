import React, { useState } from "react";
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
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("User registered successfully.");
    } catch (error) {
      console.error("Error during sign up:", error);
      if (error.code === "auth/email-already-in-use") {
        setError("User already exists, please login.");
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
            // backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background.jpg)`,
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
            <PersonAddIcon color='primary' sx={{ fontSize: 40 }} />
            <Typography variant='h5' component='h1' sx={{ mb: 2 }}>
              Signup
            </Typography>
            <Box
              component='form'
              sx={{ width: "100%" }}
              onSubmit={handleSignup}
            >
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
                Signup
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

export default Signup;
