import { Grid, Box, Stack, Container, Typography } from "@mui/material";
import { NoticiaPost } from "./noticiaPost";
import { getNoticias } from "@/lib/firestore";

export const NoticiasSection = async () => {
  const noticiasPosts = await getNoticias();

  return (
    <Container sx={{ py: 5 }}>
      <Stack>
        <Typography variant="h3" fontWeight={700}>
          Noticias de última hora
        </Typography>
        <Stack spacing={2} padding={2}>
          {noticiasPosts?.map((post) => (
            <NoticiaPost key={post.title} post={post} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};
