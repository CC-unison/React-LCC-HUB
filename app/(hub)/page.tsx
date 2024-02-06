import { Container, Box, Divider, Typography } from "@mui/material";
import { MainFeaturedPost } from "./_components/mainFeaturedPost";
import { SoyLCCsection } from "./_components/soyLCCsection";

const mainFeaturedPost = {
    title: 'LCC Hub Alpha v0',
    description: "Seguimiento de trayectoria académica de alumnos de LCC",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'LOG IN',
};

const soyLCCposts = [
    { image: "#", imageLabel: "nini", title: "Title", description: "desc", date: "hoy" },
    { image: "#", imageLabel: "nini", title: "Title", description: "desc", date: "hoy" },
    { image: "#", imageLabel: "nini", title: "Title", description: "desc", date: "hoy" },
    { image: "#", imageLabel: "nini", title: "Title", description: "desc", date: "hoy" },
]


const HubPage = () => {
    return (
        <main>
            <Container maxWidth={false} disableGutters sx={{ backgroundColor: "#ffffff" }}>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Container>
                    <Typography color={"black"} variant="h6">Soy LCC</Typography>
                    <Divider />
                    <SoyLCCsection posts={soyLCCposts} />
                </Container>
                <Container>
                    <Typography color={"black"} variant="h6">Noticias</Typography>
                    <Divider />
                    <SoyLCCsection posts={soyLCCposts} />
                </Container>
                <Container>
                    <Typography color={"black"} variant="h6">Galery</Typography>
                    <Divider />
                    <SoyLCCsection posts={soyLCCposts} />
                </Container>

            </Container>
        </main>
    );
};

export default HubPage;
