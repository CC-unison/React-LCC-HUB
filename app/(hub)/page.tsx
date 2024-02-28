import { Box, Container, Divider, Typography } from "@mui/material";
import { MainFeaturedPost } from "./_components/mainFeaturedPost";
import { SoyLCCsection } from "./_components/soyLCCsection";
import { GallerySection } from "./_components/gallerySection";
import { NoticiasSection } from "./_components/noticiasSection";
import { Section1 } from "./_components/Section1";
import { Section2 } from "./_components/Section2";
import InvitadosWallpaper from "@/public/rectoria.jpg";

const mainFeaturedPost = {
  title: "LCC Hub Alpha v0",
  description: "Seguimiento de trayectoria académica de alumnos de LCC",
  image: InvitadosWallpaper,
  imageText: "main image description",
  linkText: "LOG IN",
};

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
