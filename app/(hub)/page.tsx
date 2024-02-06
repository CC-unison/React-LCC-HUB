import { Container, Box, Divider, Typography, Grid } from "@mui/material";
import { MainFeaturedPost } from "./_components/mainFeaturedPost";
import { SoyLCCsection } from "./_components/soyLCCsection";
import { NoticiaPost } from "./_components/noticiaPost";
import { GallerySection } from "./_components/gallerySection";

const mainFeaturedPost = {
    title: 'LCC Hub Alpha v0',
    description: "Seguimiento de trayectoria académica de alumnos de LCC",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'LOG IN',
};

const soyLCCposts = [
    { image: 'https://source.unsplash.com/random?wallpapers', imageLabel: "nini", title: "Title", description: "desc", date: "hoy" },
    { image: "#", imageLabel: "nini", title: "Title", description: "desc", date: "hoy" },
    { image: "#", imageLabel: "nini", title: "Title", description: "desc", date: "hoy" },
    { image: "#", imageLabel: "nini", title: "Title", description: "desc", date: "hoy" },
]


// Maybe last two posts?, and a section for browsing all?
const noticiasPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
];

const galleryPosts = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        cols: 2,
    },
];


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
                    <Grid container spacing={4}>
                        {noticiasPosts.map((post) => (
                            <NoticiaPost key={post.title} post={post} />
                        ))}
                    </Grid>
                </Container>
                <Container>
                    <Typography color={"black"} variant="h6">Galery</Typography>
                    <Divider />
                    <GallerySection photos={galleryPosts} />
                </Container>

            </Container>
        </main>
    );
};

export default HubPage;
