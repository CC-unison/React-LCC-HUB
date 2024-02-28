import { Container, Typography } from "@mui/material";

export const Section2 = () => {
  return (
    <Container sx={{ mt: -10 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        QUe hubo mi gente
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: { xs: 5, md: 8 } }}
      >
        subtitle
      </Typography>
    </Container>
  );
};
