// src/components/Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import UploadIcon from "@mui/icons-material/Upload";

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography
          variant='h6'
          component={Link}
          to='/'
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          Home
        </Typography>
        <Box>
          <Button
            color='inherit'
            component={Link}
            to='/login'
            startIcon={<LoginIcon />}
          >
            Login
          </Button>
          <Button
            color='inherit'
            component={Link}
            to='/signup'
            startIcon={<PersonAddIcon />}
          >
            Signup
          </Button>
          <Button
            color='inherit'
            component={Link}
            to='/product-upload'
            startIcon={<UploadIcon />}
          >
            Upload Product
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
