import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { ProductCardProps } from '@interfaces/CardProps';

const ProductCard: React.FC<ProductCardProps> = ({
   brand,
  title,
  newPrice,
  usedPrice,
  imageUrl,
}) => {
    if (!brand || !title || !newPrice || !usedPrice || !imageUrl) return null;
      return (
          <Card sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row', md: 'row' , lg: 'row' , xl: 'row' },
        alignItems: 'center',
        padding: 2,
        borderRadius: 3,
        border: '2px solid #d6d6d6',
        width: { xs: 343, sm: 'auto' },
        maxWidth: 600,
        margin: '10px',
      }}>
       <CardMedia  component="img" image={imageUrl} sx={{ width: 120, height: 120, objectFit: 'contain' }}/>
       <CardContent sx= {{flex: 1}} >
        <Typography variant='subtitle2' sx={{color:'#696969', fontSize:'12px', fontWeight: 600}}>
            {brand}
        </Typography>
         <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#333', mb: 1 , fontSize: { xs: '24px', sm: '28px', md: '32px' },}}>
          {title}
        </Typography>
       <Box display="flex" alignItems="flex-end" gap={1} mb={1}>
         <Typography variant="h6" component='span' sx={{fontSize: '20px', color: '#BF0000', fontWeight: 'bold'}}>
            {newPrice} €
        </Typography>
         <Typography variant="body1" fontWeight="bold" sx={{ mb: -0.3, color: '#BF0000' }}>
            Neuf
          </Typography>
      
       </Box>
         <Typography variant="body2"  sx={{fontSize: '14px', color: '#333'}}>
           <Box component="span">
    Occasion dès{' '}
  </Box>
  <Box component="span" sx={{ fontWeight: 'bold', fontSize: '20px' }}>
    {usedPrice} €
  </Box>
        </Typography>
       </CardContent>
          </Card>
      )
}

export default ProductCard;