import styled from '@emotion/styled';

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.h2`
  text-align: center;
  font-size: 50px;
`;

export const FormText = styled.p`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
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
export const FormButtom = styled.button`
  width: 150px;
  height: 40px;
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
