import { Grid } from "@mui/material";
import { NoticiaPost } from "./noticiaPost";
import { getNoticias } from "@/lib/firestore";

export const NoticiasSection = async () => {
    const noticiasPosts = await getNoticias();
    return (
        <Grid container spacing={4}>
            {noticiasPosts?.map((post) => (
                <NoticiaPost key={post.title} post={post} />
            ))}
        </Grid>
    );
};
