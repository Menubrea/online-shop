import { Box, List, ListItem, ListItemButton, ListItemText, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const NewLink = styled(Link)`
  all: unset;
`;

const StyledListItemButton = styled(ListItemButton)`
  background-color: #ffd0c0;
  padding: 0.5em 1em;
  color: #2d2d2d;
`;

export function Nav() {
  return (
    <Box component='nav'>
      <List sx={{ display: 'flex', alignItems: 'center', padding: 0, gap: 1 }}>
        <ListItem sx={{ padding: 0, margin: 0 }}>
          <NewLink to='/'>
            <StyledListItemButton>
              <ListItemText sx={{ margin: 0 }} primary='Home' />
            </StyledListItemButton>
          </NewLink>
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          <NewLink to='/contact'>
            <StyledListItemButton>
              <ListItemText sx={{ margin: 0 }} primary='Contact' />
            </StyledListItemButton>
          </NewLink>
        </ListItem>
      </List>
    </Box>
  );
}
