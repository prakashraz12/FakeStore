import * as React from 'react';

import { Box, Button, Card, CardMedia, Container, IconButton, Link, Skeleton, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useParams } from 'react-router-dom';
export default function ProductCard({data}) {
  return (
<Link href={`/product/${data.id}`}>
<Card variant="outlined" sx={{ width: 200,height:"200px" }}>
        <Container sx={{display:"flex", flexDirection:"column",}}>
      <CardMedia minHeight="120px" maxHeight="200px" sx={{ display:"flex", p:1, justifyContent:"center" }}>
        {
            data.image ? <img
            src={data.image}
            srcSet={data.image}
            loading="lazy"
            style={{height:"100px", width:"100px", objectFit:"contain"}}
            alt=""
          /> : <Skeleton variant="rectangular" width={100} height={100}/>
        }
      </CardMedia>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {data.title.slice(0,20)}
      </Typography>
      <Box sx={{ display: 'flex', alignItems:"center", justifyContent:"space-between" }}>
        <div>
          <Typography fontSize="lg" fontWeight="600">
            RS.${data.price}
          </Typography>
        </div>
        <IconButton>
<AddShoppingCartIcon />
        </IconButton>
      </Box>
      </Container>
    </Card>
</Link>
  );
}