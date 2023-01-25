import styled from '@emotion/styled';

export const FilterBox = styled.div`
  padding: 20px;
`;

export const FilterInput = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
  outline: none;
  border: solid 2px teal;
  border-radius: 5px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border: none;
    border: solid 2px red;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
`;
