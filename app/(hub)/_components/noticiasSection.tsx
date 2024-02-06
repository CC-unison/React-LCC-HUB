import { Grid } from "@mui/material";
import { NoticiaPost } from "./noticiaPost";


export const NoticiasSection = async () => {
    const noticiasPosts = await getNews();
    return (
        <Grid container spacing={4}>
            {noticiasPosts.map((post) => (
                <NoticiaPost key={post.title} post={post} />
            ))}
        </Grid>
    );
};

async function getNews() {
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

    return noticiasPosts;
}

