// src/pages/Login.js
import React from "react";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  return (
    <Container maxWidth='sm'>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        <LoginIcon color='primary' sx={{ fontSize: 40 }} />
        <Typography variant='h5' component='h1' sx={{ mb: 2 }}>
          Login
        </Typography>
        <Box component='form' sx={{ width: "100%" }}>
          <TextField
            label='Email'
            fullWidth
            margin='normal'
            variant='outlined'
          />
          <TextField
            label='Password'
            type='password'
            fullWidth
            margin='normal'
            variant='outlined'
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
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
