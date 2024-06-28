// src/pages/Signup.js
import React from "react";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Signup = () => {
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
        <PersonAddIcon color='primary' sx={{ fontSize: 40 }} />
        <Typography variant='h5' component='h1' sx={{ mb: 2 }}>
          Signup
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
            Signup
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
