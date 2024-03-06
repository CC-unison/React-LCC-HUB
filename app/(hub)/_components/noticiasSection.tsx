import { Grid, Box, Stack, Container, Typography } from "@mui/material";
import { NoticiaPost } from "./noticiaPost";
import { getNoticias } from "@/lib/firestore";

export const NoticiasSection = async () => {
  const noticiasPosts = await getNoticias();

  return (
    <Container sx={{ py: 5 }}>
      <Stack>
        <Typography variant="h3" fontWeight={700}>
          Noticias
        </Typography>
        <Stack spacing={2} padding={2}>
          {noticiasPosts?.map((post) => (
            <NoticiaPost key={post.title} post={post} />
          ))}
        </Stack>
      </Stack>
    </Container>
    //   <Box sx={{ display: "flex", justifyContent: "center" }}>
    //     <Container maxWidth="md">
    //       <Typography variant="h2" sx={{ mb: 2 }}>
    //         Noticias
    //       </Typography>
    //     </Container>
    //     <Grid
    //       container
    //       spacing={4}
    //       alignItems="stretch"
    //       justifyContent={"space-evenly"}
    //       minHeight={"100%"}
    //       minWidth={"100%"}
    //     >
    //     </Grid>
    //   </Box>
  );
};
