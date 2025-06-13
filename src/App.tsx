import { Card } from '@mui/material';
import ProductCard from 'Components/ProductCard';
import React from 'react';


function App() {
  return (
    <Card sx={{backgroundColor: '#f7f7f7', height: 'auto', padding:'10px'}}>
       <ProductCard brand='Apple' title='Apple iPhone 11 128 Go Double SIM Noir Sidéral' imageUrl='https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg'
        newPrice={754}
        usedPrice="720,99"/>
    </Card>
  );
}

export default App;

