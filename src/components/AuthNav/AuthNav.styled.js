import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: black;
  font-size: 20px;

  &.active {
    color: red;
    text-decoration: underline;
  }
`;
