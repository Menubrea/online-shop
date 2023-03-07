import {
  Container,
  FormControl,
  InputLabel,
  NativeSelect,
  Box,
  Typography,
  option,
} from '@mui/material';
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
        }}
      >
        <Box sx={{ minWidth: 150, marginTop: 2 }}>
          <FormControl variant='standard' fullWidth>
            <InputLabel variant='standard' htmlFor='uncontrolled-native'>
              Category
            </InputLabel>
            <NativeSelect
              defaultValue='All'
              inputProps={{
                name: 'Category',
                id: 'uncontrolled-native',
              }}
            >
              <option onClick={Reset} value='all'>
                All
              </option>
              <option
                onClick={() => FilterTag('Electronics')}
                value='electronics'
              >
                Electronics
              </option>
              <option onClick={() => FilterTag('Shoes')} value='shoes'>
                Shoes
              </option>
              <option
                onClick={() => FilterTag('Headphones')}
                value='headphones'
              >
                Headphones
              </option>
              <option onClick={() => FilterTag('Fashion')} value='fashion'>
                Fashion
              </option>
              <option onClick={() => FilterTag('Beauty')} value='beauty'>
                Beauty
              </option>
              <option onClick={() => FilterTag('Perfume')} value='perfume'>
                Perfume
              </option>
              <option onClick={() => FilterTag('Bags')} value='bags'>
                Bags
              </option>
              <option onClick={() => FilterTag('Watch')} value='watch'>
                Watches
              </option>
              <option
                onClick={() => FilterTag('Accessories')}
                value='accessories'
              >
                Accessories
              </option>
              <option onClick={() => FilterTag('Shoes')} value='shoes'>
                Shoes
              </option>
              <option onClick={() => FilterTag('Skin care')} value='skin care'>
                Skin Care
              </option>
            </NativeSelect>
          </FormControl>
        </Box>
        <Search data={data} />
      </Container>

      <Container>
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
          }}
        >
          {headline}
        </Typography>
      </Container>
      <Products
        data={filterData}
        isError={isError}
        isLoading={isLoading}
        state={state}
        dispatch={dispatch}
      />
    </Box>
  );
}
