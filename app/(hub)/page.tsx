import { Container, Box, Divider, Typography, Grid } from "@mui/material";
import { MainFeaturedPost } from "./_components/mainFeaturedPost";
import { SoyLCCsection } from "./_components/soyLCCsection";
import { GallerySection } from "./_components/gallerySection";
import { NoticiasSection } from "./_components/noticiasSection";

const mainFeaturedPost = {
    title: 'LCC Hub Alpha v0',
    description: "Seguimiento de trayectoria académica de alumnos de LCC",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'LOG IN',
};





const HubPage = async () => {
    return (
        <main>
            <Container maxWidth={false} disableGutters sx={{ backgroundColor: "#ffffff" }}>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Container>
                    <Typography color={"black"} variant="h6">Soy LCC</Typography>
                    <Divider />
                    <SoyLCCsection />
                </Container>
                <Container>
                    <Typography color={"black"} variant="h6">Noticias</Typography>
                    <Divider />
                    <NoticiasSection />
                </Container>
                <Container>
                    <Typography color={"black"} variant="h6">Galery</Typography>
                    <Divider />
                    <GallerySection />
                </Container>
            </Container>
        </main>
    );
};

export default HubPage;
