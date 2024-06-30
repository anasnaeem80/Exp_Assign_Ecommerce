import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import UploadIcon from "@mui/icons-material/Upload";

const Navbar = ({ currentPath }) => {
  return (
    <AppBar position='static' sx={{ bgcolor: "#3f51b5" }}>
      <Toolbar>
        <Typography
          variant='h6'
          component={Link}
          to='/'
          sx={{ flexGrow: 1, textDecoration: "none", color: "#fff" }}
        >
          EasyBuy
        </Typography>
        <Box>
          {currentPath !== "/login" && (
            <Button
              component={Link}
              to='/login'
              startIcon={<LoginIcon />}
              sx={{
                color: "#fff",
                border: "1px solid #fff",
                margin: "0 5px",
                "&:hover": {
                  bgcolor: "#fff",
                  color: "#3f51b5",
                  border: "1px solid #3f51b5",
                },
              }}
            >
              Login
            </Button>
          )}
          {currentPath !== "/signup" && (
            <Button
              component={Link}
              to='/signup'
              startIcon={<PersonAddIcon />}
              sx={{
                color: "#fff",
                border: "1px solid #fff",
                margin: "0 5px",
                "&:hover": {
                  bgcolor: "#fff",
                  color: "#3f51b5",
                  border: "1px solid #3f51b5",
                },
              }}
            >
              Signup
            </Button>
          )}
          {currentPath !== "/product-upload" && (
            <Button
              component={Link}
              to='/product-upload'
              startIcon={<UploadIcon />}
              sx={{
                color: "#fff",
                border: "1px solid #fff",
                margin: "0 5px",
                "&:hover": {
                  bgcolor: "#fff",
                  color: "#3f51b5",
                  border: "1px solid #3f51b5",
                },
              }}
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
