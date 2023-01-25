import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const HomeLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 24px;
  padding: 12px;
  color: black;
  &.active {
    color: red;
    text-decoration: underline;
  }
`;

export const ContactsLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 24px;
  padding: 12px;
  color: black;
  &.active {
    color: red;
    text-decoration: underline;
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

export const NavText = styled.h5`
  font-size: 25px;
`;
