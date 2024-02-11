import { Grid, Box } from "@mui/material";
import { NoticiaPost } from "./noticiaPost";
import { getNoticias } from "@/lib/firestore";

export const NoticiasSection = async () => {
    const noticiasPosts = await getNoticias();
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Grid container spacing={4} alignItems="stretch" justifyContent={"space-evenly"}
                minHeight={"100%"} minWidth={"100%"}>
                {noticiasPosts?.map((post) => (
                    <NoticiaPost key={post.title} post={post} />
                ))}
            </Grid>
        </Box>
    );
};
