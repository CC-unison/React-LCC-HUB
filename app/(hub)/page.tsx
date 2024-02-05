import { Container } from "@mui/material";
import { MainFeaturedPost } from "./_components/mainFeaturedPost";

const mainFeaturedPost = {
    title: 'LCC Hub Alpha v0',
    description: "Seguimiento de trayectoria académica de alumnos de LCC",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'LOG IN',
};
const HubPage = () => {
    return (
        <main>
            <MainFeaturedPost post={mainFeaturedPost} />
        </main>
    );
};

export default HubPage;
