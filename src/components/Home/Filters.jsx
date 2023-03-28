import { Box, Select, FormControl, InputLabel, MenuItem } from '@mui/material';

export function Filters({ Reset, FilterTag }) {
  return (
    <Box sx={{ minWidth: 150, marginTop: 2 }}>
      <FormControl color='secondary' variant='outlined' fullWidth>
        <InputLabel variant='outlined' htmlFor='uncontrolled-native'>
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
          <MenuItem onClick={() => FilterTag('Audio')} value='audio'>
            Audio
          </MenuItem>
          <MenuItem onClick={() => FilterTag('Skin care')} value='skin care'>
            Skin Care
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
