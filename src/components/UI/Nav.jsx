import { List, ListItem, ListItemButton, ListItemText, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const NewLink = styled(Link)`
  all: unset;
`;

export function Nav() {
  return (
    <nav>
      <List sx={{ display: 'flex', alignItems: 'center' }}>
        <ListItem sx={{ padding: 0 }}>
          <NewLink to='/'>
            <ListItemButton sx={{ paddingX: 1, borderRadius: 2 }}>
              <ListItemText primary='Home' />
            </ListItemButton>
          </NewLink>
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          <NewLink to='/contact'>
            <ListItemButton sx={{ paddingX: 1, borderRadius: 2 }}>
              <ListItemText primary='Contact' />
            </ListItemButton>
          </NewLink>
        </ListItem>
      </List>
    </nav>
  );
}
