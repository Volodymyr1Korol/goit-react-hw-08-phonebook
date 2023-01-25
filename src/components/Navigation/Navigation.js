import { HomeLink, ContactsLink, Box, NavText } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box component="nav" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <HomeLink to="/">
        <NavText variant="h5">PhoneBook</NavText>
      </HomeLink>
      {isLoggedIn && (
        <ContactsLink to="/contacts">
          <NavText variant="h5">Contacts</NavText>
        </ContactsLink>
      )}
    </Box>
  );
};
