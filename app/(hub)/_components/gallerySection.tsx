import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from '@mui/material';

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

interface GallerySectionProps {
    photos: ReadonlyArray<{
        img: string;
        title: string;
        rows?: number;
        cols?: number;
    }>;
}

export const GallerySection = (props: GallerySectionProps) => {
    const { photos } = props;

    return (
        <Container sx={{ pb: 10 }}>
            <ImageList
                sx={{ height: 300 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
                {photos.map((photo) => (
                    <ImageListItem key={photo.img} cols={photo.cols || 1} rows={photo.rows || 1}>
                        <img
                            {...srcset(photo.img, 121, photo.rows, photo.cols)}
                            alt={photo.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
}
