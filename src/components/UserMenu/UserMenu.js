import { Avatar } from '@mui/material';
import { Box, NameUser, UserButtom } from './UserMenu.styled';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const firstLetter = user.name.charAt(0).toUpperCase();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Box>
      <NameUser>{user.name}</NameUser>
      <Avatar sx={{ bgcolor: 'orange', mr: 2 }}>{firstLetter}</Avatar>
      <UserButtom type="button" onClick={handleLogOut}>
        Logout
      </UserButtom>
    </Box>
  );
};
