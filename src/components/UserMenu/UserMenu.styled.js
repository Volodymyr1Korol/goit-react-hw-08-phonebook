import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const NameUser = styled.h6`
  margin-right: 10px;
  font-size: 20px;
`;

export const UserButtom = styled.button`
  width: 100px;
  margin-right: 20px;
  height: 30px;
  border-radius: 5px;
  color: white;
  background-color: teal;
  border: none;
  margin: 0px, auto, 0px, auto;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: white;
    background-color: red;
  }
`;
