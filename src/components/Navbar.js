import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import UploadIcon from "@mui/icons-material/Upload";

const Navbar = ({ currentPath }) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography
          variant='h6'
          component={Link}
          to='/'
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          EasyBuy
        </Typography>
        <Box>
          {currentPath !== "/login" && (
            <Button
              color='inherit'
              component={Link}
              to='/login'
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
          )}
          {currentPath !== "/signup" && (
            <Button
              color='inherit'
              component={Link}
              to='/signup'
              startIcon={<PersonAddIcon />}
            >
              Signup
            </Button>
          )}
          {currentPath !== "/product-upload" && (
            <Button
              color='inherit'
              component={Link}
              to='/product-upload'
              startIcon={<UploadIcon />}
            >
              Upload Product
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
