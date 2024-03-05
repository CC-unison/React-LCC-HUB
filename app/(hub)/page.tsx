import { Box, Container, Divider, Typography } from "@mui/material";
import { SoyLCCsection } from "./_components/soyLCCsection";
import { GallerySection } from "./_components/gallerySection";
import { NoticiasSection } from "./_components/noticiasSection";
import { Section1 } from "./_components/Section1";

const HubPage = async () => {
  return (
    <div>
      <Section1 />
      <Box sx={{ bgcolor: "background.default", position: "relative" }}>
        <div id="soylcc">
          <SoyLCCsection />
        </div>

        <Container>
          <Typography color={"black"} variant="h6">
            Noticias
          </Typography>
          <Divider />
          <NoticiasSection />
        </Container>
        <Container>
          <Typography color={"black"} variant="h6">
            Galery
          </Typography>
          <Divider />
          <GallerySection />
        </Container>
      </Box>
    </div>
  );
};

export default HubPage;
