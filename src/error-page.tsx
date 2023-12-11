import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const NotFound: React.FC = () => {
  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h1" component="h2" color="textSecondary" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" color="textSecondary" paragraph>
        Oops! La página a la que entró no existe.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Regresar
      </Button>
    </Container>
  );
};

export default NotFound;
