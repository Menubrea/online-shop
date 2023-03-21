import { Container, Box, Typography } from '@mui/material';
import { Products } from './Products';
import { Search } from './Search';
import Hero from './Hero';
import { FilterHook } from '../../Hooks/FilterHook';
import { Filters } from './Filters';
import { Sales } from './Sales';

export function Home({ data, isLoading, isError, state, dispatch }) {
  const { filterData, headline, Reset, FilterTag } = FilterHook(data);

  return (
    <Box component='main'>
      <Hero />
      <Sales data={data} />
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
