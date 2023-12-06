// NoticiasCard.tsx

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface MyComponentProps {
  foto: string;
  titulo: string;
  descripcion: string;
  link: string;
}

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
};

export const NoticiasCard: React.FC<MyComponentProps> = ({
  foto,
  titulo,
  descripcion,
  link,
}: MyComponentProps) => {
  function handleClick() {
    window.open(link, '_blank');
  }

  const truncatedDescription = truncateText(descripcion, 100); // Adjust the maximum length as needed

  return (
    <Card sx={{ minWidth: 448, maxWidth: 800, minHeight: 500, position: 'relative' }}>
      <CardMedia
        component="img"
        style={{
          height: 240,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${foto})`,
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions style={{ position: 'absolute', bottom: 0 }}>
        <Button size="small" onClick={handleClick}>
          Leer mas
        </Button>
      </CardActions>
    </Card>
  );
};
