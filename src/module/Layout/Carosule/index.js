import { Paper } from '@mui/material';
import React from 'react'
import Carousel from 'react-material-ui-carousel';

export const CarouselFunc = () => {
    const items = [
        {
          id: 1,
          title: 'Item 1',
          description: 'Description for item 1',
          imageUrl: 'https://img.freepik.com/free-photo/portrait-screaming-girl-holding-shopping-bags_329181-7347.jpg?w=740&t=st=1680953717~exp=1680954317~hmac=08d4dc5a585bb38685772d1d423d4199bc06b87309ba8916b8cb7c129ee67f82',
        },
        {
          id: 2,
          title: 'Item 2',
          description: 'Description for item 2',
          imageUrl: 'https://via.placeholder.com/400x200',
        },
        {
          id: 3,
          title: 'Item 3',
          description: 'Description for item 3',
          imageUrl: 'https://via.placeholder.com/400x200',
        },
      ];
  return (
    <div>
       <Carousel animation="slide"   fullHeightHover={false}>
      {items.map((item) => (
        <Paper key={item.id}>
          <img src={item.imageUrl} alt={item.title} style={{width:"100%", height:"90vh", objectFit:"cover"}} />
        </Paper>
      ))}
    </Carousel>
    </div>
  )
}


