import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, image, title, price, rating, description } = product;
  const { rate, count } = rating;
  const navigate = useNavigate();
  const [showDescription, setShowDescription] = useState(false);

  const handleShowDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Card style={{ width: 200, maxHeight: showDescription ? 'none' : 550, overflowY: 'auto' }} className='cards'>
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom component="div" className='mb-1'>
          <h5 className='text-center'>{title}</h5>
        </Typography>
        <div >
          <Typography>
            <h5>Price: {price} $</h5>
          </Typography>
          <Typography>
            <h5>Rating : {rate} ({count} reviews)</h5>
          </Typography>
        </div>
        {showDescription && (
          <Typography>
            <p>{description}</p>
          </Typography>
        )}
      </CardContent>
      <CardActions className='btn'>
        <Button size="small" color="primary" onClick={handleShowDescription}>
          {showDescription ? "Hide description" : "Show description"}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
