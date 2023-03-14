import { Container, FormControl, InputLabel, Select, Box, Typography, MenuItem } from '@mui/material';
import { Products } from './Products';
import { Search } from './Search';
import { useState, useEffect } from 'react';
import Hero from './Hero';

export function Home({ data, isLoading, isError, state, dispatch }) {
  const [filterData, setFilterData] = useState([]);
  const [headline, setHeadline] = useState('All');

  // Sets the initial filterData to include all data.
  useEffect(() => {
    setFilterData(data);
  }, [data]);

  // Reset states
  const Reset = () => {
    setFilterData(data);
    setHeadline('All');
  };

  // Function for handling different <categories>
  function FilterTag(category) {
    const filtered = data.filter((product) => {
      return product.tags.includes(category.toLowerCase());
    });
    setFilterData(filtered);
    setHeadline(category);
  }

  return (
    <Box component='main'>
      <Hero />
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          marginTop: 2,
        }}>
        <Box sx={{ minWidth: 150, marginTop: 2 }}>
          <FormControl variant='standard' fullWidth>
            <InputLabel variant='standard' htmlFor='uncontrolled-native'>
              Category
            </InputLabel>
            <Select defaultValue='all' label='Category'>
              <MenuItem onClick={Reset} value='all'>
                All
              </MenuItem>
              <MenuItem onClick={() => FilterTag('Electronics')} value='electronics'>
                Electronics
              </MenuItem>
              <MenuItem onClick={() => FilterTag('Shoes')} value='shoes'>
                Shoes
              </MenuItem>
              <MenuItem onClick={() => FilterTag('Headphones')} value='headphones'>
                Headphones
              </MenuItem>
              <MenuItem onClick={() => FilterTag('Fashion')} value='fashion'>
                Fashion
              </MenuItem>
              <MenuItem onClick={() => FilterTag('Beauty')} value='beauty'>
                Beauty
              </MenuItem>
              <MenuItem onClick={() => FilterTag('Perfume')} value='perfume'>
                Perfume
              </MenuItem>
              <MenuItem onClick={() => FilterTag('Bags')} value='bags'>
                Bags
              </MenuItem>
              <MenuItem onClick={() => FilterTag('Watch')} value='watch'>
                Watches
              </MenuItem>
              <MenuItem onClick={() => FilterTag('Accessories')} value='accessories'>
                Accessories
              </MenuItem>
              <MenuItem onClick={() => FilterTag('Shoes')} value='shoes'>
                Shoes
              </MenuItem>
              <MenuItem onClick={() => FilterTag('Skin care')} value='skin care'>
                Skin Care
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Search data={data} />
      </Container>
      <Box component='section'>
        <Typography
          variant='h5'
          component='h1'
          sx={{
            marginTop: 2,
            marginBottom: 1,
            fontFamily: 'arbotek',
            fontWeight: 900,
            color: 'white.main',
            backgroundColor: 'black.light',
            width: 'fit-content',
            paddingX: 2,
            paddingBottom: 0.8,
            marginX: 'auto',
          }}>
          {headline}
        </Typography>
        <Products data={filterData} isError={isError} isLoading={isLoading} state={state} dispatch={dispatch} headerElement='h2' />
      </Box>
    </Box>
  );
}
