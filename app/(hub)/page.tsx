import { Stack } from "@mui/material";
import { SoyLCCsection } from "./_components/soyLCCsection";
import { GallerySection } from "./_components/gallerySection";
import { NoticiasSection } from "./_components/noticiasSection";
import { Section1 } from "./_components/Section1";

const HubPage = async () => {
  return (
    <div>
      <Section1 />
      <Stack
        spacing={2}
        sx={{ mt: 20, alignItems: "center", bgcolor: "#FAF9F6" }}
      >
        <div id="soylcc" />
        <SoyLCCsection />
        <div id="noticias" />
        <NoticiasSection />
        <div id="galeria" />
        <GallerySection />
      </Stack>
    </div>
  );
};

export default HubPage;
