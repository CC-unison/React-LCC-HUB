"use client";

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container, Typography } from "@mui/material";
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
    <Container sx={{ pb: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 2 }}>
          Gallery
        </Typography>
      </Container>

      {photos && (
        <ImageList
          sx={{ height: 300 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {photos.map((photo) => (
            <ImageListItem
              key={photo.img}
              cols={photo.cols || 3}
              rows={photo.rows || 3}
            >
              <Image
                {...srcset(photo.img, 121, photo.rows, photo.cols)}
                alt={photo.title}
                layout="fill"
                objectFit="contain"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
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
