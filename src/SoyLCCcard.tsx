import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
interface MyComponentProps {
    foto: string;
    titulo: string;
    link: string;
  }

export default function SoyLCC({foto, titulo, link}: MyComponentProps) {
    function handleClick(){
        window.open(link, '_blank')
    }
  return (
    <Card sx={{ minWidth: 345, minHeight:345, maxWidth: 345, mr:2}} onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: 345 }}
          height="240"
          image={foto}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}