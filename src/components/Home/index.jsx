import { Container, Box, Typography } from '@mui/material';
import { Products } from './Products';
import { Search } from './Search';
import Hero from './Hero';
import { FilterHook } from '../../Hooks/FilterHook';
import { Filters } from './Filters';
import { Sales } from './Sales';
import { MetaData } from '../MetaData';

/**
 * Main Component for Home Page.
 * @param {*}
 * @returns renders content of home page.
 */
export function Home({ data, isLoading, isError, state, dispatch }) {
  const { filterData, headline, Reset, FilterTag } = FilterHook(data);

  return (
    <Box component='main'>
      {/* Meta Data */}
      <MetaData
        title='Re:mote | Home'
        description='Online Store | Purchase all kinds of items online, quick and easy with price match guarantee'
        tags='Shop, purchase, online, e-commerce'
      />

      {/* Home Page Hero */}
      <Hero />

      {/* Products on Sale */}
      <Typography
        variant='h5'
        component='h1'
        sx={{
          backgroundColor: 'black.light',
          textAlign: 'center',
          color: 'white.light',
          padding: '0.2em .6em',
          width: 'fit-content',
          margin: '.5em auto',
          borderRadius: 2,
        }}>
        New Weekend Deals
      </Typography>
      <Container>
        <Sales data={data} />
      </Container>

      {/* Filter options and search */}
      <Container
        sx={{
          display: { sm: 'flex', xs: 'block' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          marginTop: 2,
        }}>
        <Filters Reset={Reset} FilterTag={FilterTag} />
        <Search data={data} />
      </Container>

      {/* List of all Products and title */}
      <Box component='section'>
        <Container>
          <Typography
            variant='h6'
            component='h2'
            sx={{
              marginY: 2,
              color: 'white.main',
              backgroundColor: 'black.light',
              paddingY: 1,
              textAlign: 'center',
            }}>
            {headline}
          </Typography>
        </Container>
        <Products data={filterData} isError={isError} isLoading={isLoading} state={state} dispatch={dispatch} headerElement='h3' />
      </Box>
    </Box>
  );
}
