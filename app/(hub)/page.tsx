import { Container } from "@mui/material";
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
            <Container maxWidth={false} sx={{ backgroundColor: "#112e5c" }}>
                <MainFeaturedPost post={mainFeaturedPost} />
                <SoyLCCsection posts={soyLCCposts} />
            </Container>
        </main>
    );
};

export default HubPage;
