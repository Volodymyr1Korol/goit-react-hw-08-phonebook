import * as React from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { HeaderBox, Logo } from './Heder.style';

export default function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderBox>
      <Logo
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Logo>
    </HeaderBox>
  );
}
