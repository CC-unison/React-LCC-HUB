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
export default function NoticiasCard({foto, titulo, descripcion, link}: MyComponentProps) {
    function handleClick(){
        window.open(link, '_blank')
    }
  return (
    <Card sx={{ minWidth: 375, minHeight:345, maxWidth:375, mr:2}}>
      <CardMedia
       
        component="img"
        alt="img"
        height="240"
        image={foto}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Leer mas</Button>
      </CardActions>
    </Card>
  );
}