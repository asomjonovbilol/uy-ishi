import React from 'react';
import { Modal, Button, Box, Typography, TextField } from '@mui/material';

function LoginModal({ setIsLoggedIn }) {
  const handleLogin = () => {
    // Add login logic here
    setIsLoggedIn(true);
  };

  return (
    <Modal open={true}>
      <Box className="modal-box">
        <Typography variant="h6">Login</Typography>
        <TextField label="Username" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
      </Box>
    </Modal>
  );
}

export default LoginModal;
