import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';

export function Filters({ data }) {
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
    <Box sx={{ minWidth: 150, marginTop: 2 }}>
      <FormControl variant='standard' fullWidth>
        <InputLabel variant='standard' htmlFor='uncontrolled-native'>
          Category
        </InputLabel>
        <Select defaultValue='All' label='Category'>
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
  );
}
