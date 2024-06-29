import React, { useState } from "react";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";

const ProductUpload = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();
  };

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
        <UploadIcon color='primary' sx={{ fontSize: 40 }} />
        <Typography variant='h5' component='h1' sx={{ mb: 2 }}>
          Upload Product
        </Typography>
        <Box component='form' sx={{ width: "100%" }}>
          <TextField
            label='Product Name'
            fullWidth
            margin='normal'
            variant='outlined'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <TextField
            label='Product Description'
            fullWidth
            margin='normal'
            variant='outlined'
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <TextField
            label='Product Price'
            type='number'
            fullWidth
            margin='normal'
            variant='outlined'
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            sx={{ mt: 2 }}
          >
            Upload Product
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductUpload;
