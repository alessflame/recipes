import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardHome({img,title,text}) {
  return (
    <Card sx={{ maxWidth: 305, m:"20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5"  sx={{fontSize:"30px"}}  component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{fontSize:"18px"}} color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}