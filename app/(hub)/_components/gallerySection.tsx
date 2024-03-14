"use client";

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container, Stack, Typography } from "@mui/material";
import { getGalleryPhotos } from "@/lib/firestore";
import Image from "next/image";
import { useState, useEffect } from "react";

export const GallerySection = () => {
  const [photos, setPhotos] = useState();
  useEffect(() => {
    const prepareData = async () => {
      const photos = await getGalleryPhotos();
      setPhotos(photos);
    };
    prepareData();
  }, []);

  return (
    <Container sx={{ pt: 10 }}>
      <Stack>
        <Typography variant="h3" fontWeight={700}>
          Compañeros captados cámara
        </Typography>
        {photos && (
          <ImageList sx={{ width: "auto", height: "auto" }} cols={3}>
            {photos.map((item) => (
              <ImageListItem key={item.img}>
                <Image
                  src={`${item.img}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: 400, height: 600 }} // optional
                  alt={item.title}
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Stack>
      {/* <Container sx={{ pb: 10 }}> */}
      {/*   <Container maxWidth="md"> */}
      {/*     <Typography variant="h2" sx={{ mb: 2 }}> */}
      {/*       Gallery */}
      {/*     </Typography> */}
      {/*   </Container> */}
      {/**/}
      {/*   {photos && ( */}
      {/*     <ImageList */}
      {/*       sx={{ height: 3000 }} */}
      {/*       variant="quilted" */}
      {/*       cols={4} */}
      {/*       rowHeight={1210} */}
      {/*     > */}
      {/*       {photos.map((photo) => ( */}
      {/*         <ImageListItem */}
      {/*           key={photo.img} */}
      {/*           cols={photo.cols || 3} */}
      {/*           rows={photo.rows || 3} */}
      {/*         > */}
      {/*           <Image */}
      {/*             {...srcset(photo.img, 121, photo.rows, photo.cols)} */}
      {/*             alt={photo.title} */}
      {/*             layout="fill" */}
      {/*             objectFit="contain" */}
      {/*           /> */}
      {/*         </ImageListItem> */}
      {/*       ))} */}
      {/*     </ImageList> */}
      {/*   )} */}
    </Container>
  );
};

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
