import { IconButton, CardContent, CardMedia, Container, TextField, Typography, styled, Box, Divider, Alert } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const UnLink = styled(Link)`
  all: unset;
  display: block;
  cursor: pointer;
  :hover {
    outline: 1px dashed #4f4f4f;
  }
`;

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
  gap: 0.5em;
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
        <Alert sx={{ marginTop: 1 }} severity='info'>
          No items found
        </Alert>
        // <Typography variant='h6' component='div' sx={{ textAlign: 'center', marginTop: 2 }}>
        //   No items found.
        // </Typography>
      ))
    : (display = (
        <GridBox>
          {filteredItems &&
            filteredItems.map((product) => (
              <Box sx={{}} key={product.id}>
                <UnLink
                  to={`/product/${product.id}`}
                  sx={{
                    display: 'flex',
                    backgroundColor: 'white.main',
                    alignItems: 'center',
                    borderRadius: 2,
                    borderTop: 2,
                    borderBottom: 2,
                    borderColor: 'primary.main',
                  }}>
                  <CardMedia
                    sx={{ height: 40, width: 40, objectFit: 'cover', marginLeft: 1, borderRadius: 2 }}
                    image={product.imageUrl}
                    title={product.title}
                  />
                  <CardContent sx={{ marginY: 0, padding: 1 }}>
                    <Typography component='p' variant='body1' sx={{ padding: 0, margin: 0, paddingBottom: 0 }}>
                      {product.title}
                    </Typography>
                  </CardContent>
                </UnLink>
              </Box>
            ))}
        </GridBox>
      ));

  return (
    <Box sx={{ position: 'relative', marginTop: 2, width: '100%' }}>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <TextField sx={{ margin: 0 }} onChange={handleChange} label='Search All Products' fullWidth variant='outlined' color='secondary' id='searchField' />
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
  );
}
