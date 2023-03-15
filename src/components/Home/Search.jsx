import { IconButton, Card, CardContent, CardMedia, Container, TextField, Typography, styled, Box, Divider } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Price from '../Price';

const SearchContainer = styled(Container)`
  position: absolute;
  background-color: white;
  z-index: 5;
  margin: 0;
  padding: 1.5em;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
`;

const GridBox = styled(Box)`
  display: grid;
  padding: 0.2em;
  padding-left: 0;
  padding-right: 0;
  gap: 1em;
  border-radius: 0.2em;
  margin-top: 0.2em;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export function Search({ data }) {
  const [searchField, setSearchField] = useState('');

  const filteredItems = data.filter((item) => {
    if (item.title.toLowerCase().startsWith(searchField.toLowerCase()) && searchField.length > 0) {
      return true;
    }
    return false;
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const resetField = () => {
    document.querySelector('#searchField').value = '';
    setSearchField('');
    display = '';
  };

  let display;
  filteredItems.length === 0 && searchField.length > 0
    ? (display = (
        <Typography variant='h6' component='div' sx={{ textAlign: 'center', marginTop: 1 }}>
          No items found.
        </Typography>
      ))
    : (display = (
        <GridBox>
          {filteredItems &&
            filteredItems.map((product) => (
              <Card key={product.id} sx={{ borderRadius: 0, boxShadow: 'none' }}>
                <CardMedia sx={{ height: 120, objectFit: 'cover' }} image={product.imageUrl} title={product.title} />
                <Price product={product} position='initial' />
                <CardContent sx={{ marginY: 0, padding: 1 }}>
                  <Typography component='h2' variant='h6' sx={{ padding: 0, margin: 0, paddingBottom: 0 }}>
                    {product.title}
                  </Typography>
                  <Typography component='p' variant='body2' sx={{ padding: 0, margin: 0, paddingBottom: 0 }}>
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
        </GridBox>
      ));

  return (
    <>
      <Box sx={{ position: 'relative', marginTop: 2, width: '100%' }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <TextField sx={{ margin: 0 }} onChange={handleChange} label='Search All Products' fullWidth variant='outlined' id='searchField' />
          {searchField && (
            <IconButton sx={{ height: 'min-content' }} size='small' variant='contained' onClick={resetField}>
              <CloseIcon />
            </IconButton>
          )}
        </Box>
        {searchField && (
          <SearchContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {' '}
              <Typography>Search results for: {searchField}</Typography>
              <Typography>Total: {filteredItems.length}</Typography>
            </Box>
            <Divider />
            {display}
          </SearchContainer>
        )}
      </Box>
    </>
  );
}
