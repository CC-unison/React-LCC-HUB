import * as React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardHeader, Skeleton } from "@mui/material";

interface SoyLCCcardProps {
  post: {
    date: string;
    image: string;
    imageLabel: string;
    title: string;
    url: string;
  };
}

export const LoadingSoyLCCcard = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: 400, m: 2 }}>
        <CardHeader
          title={
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          }
          subheader={<Skeleton animation="wave" height={10} width="40%" />}
        />
        <Skeleton sx={{ height: 240 }} animation="wave" variant="rectangular" />
      </Card>
    </Box>
  );
};

export const SoyLCCcard = (props: SoyLCCcardProps) => {
  const { post } = props;

  return (
    <CardActionArea
      component="a"
      href={post.url}
      target="_blank"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card sx={{ maxWidth: 400, m: 2 }}>
        <CardHeader title={post.title} subheader={post.date} />
        <CardMedia
          component="img"
          height="240"
          image={post.image}
          alt={post.imageLabel}
        />
      </Card>
    </CardActionArea>
  );
};
