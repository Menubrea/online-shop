import ProductCard from './Card';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const MainGrid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  max-width: 100%;
  margin: 0 auto 2em;
  min-height: 50vh;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export function Products({ data, state, dispatch, headerElement }) {
  return (
    <MainGrid component='ul'>
      <ProductCard data={data} state={state} dispatch={dispatch} headerElement={headerElement} />
    </MainGrid>
  );
}
