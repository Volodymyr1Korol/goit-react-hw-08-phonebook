import styled from '@emotion/styled';
export const ContactListContact = styled.ul`
  padding: 20px;
`;
export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 640px;
  margin-bottom: 15px;
  padding: 10px;

  border-bottom: solid 2px black;
  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }
`;
export const ContactText = styled.p`
  font-size: 20px;
`;
export const ContactButtom = styled.button`
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
