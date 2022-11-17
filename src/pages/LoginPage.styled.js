import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
  padding: 15px 0;
  align-items: flex-end;
  
`;

export const DivForm = styled.div`
display: flex;
justify-content: flex-end;
`

export const Input = styled.input`
  width: 210px;
  height: 20px;
  padding-left: 10px;
  outline-color: lightgreen;
  border-color: lightgreen;
  border-radius: 4px;
  -webkit-box-shadow: 3px 2px 3px 1px rgba(75,189,44,1);
-moz-box-shadow: 3px 2px 3px 1px rgba(75,189,44,1);
box-shadow: 3px 2px 3px 1px rgba(75,189,44,1);
`;

export const Button = styled.button`
justify-content: flex-end;
-webkit-box-shadow: 3px 2px 7px 1px rgba(75,189,44,1);
-moz-box-shadow: 3px 2px 7px 1px rgba(75,189,44,1);
box-shadow: 3px 2px 7px 1px rgba(75,189,44,1);
border-radius: 10px;
border-color: lightgreen;
  background-color: ${props => (props.main ? 'green' : 'transparent')};
  display: inline-flex;
  width: 150px;
  height: 35px;
  justify-content: center;
  align-items: center;
  
  border-radius: ${props => (props.round ? props.round : '2px')};
  transition: all 250ms linear;
  &:hover {
    background-color: lightgreen;
    border-color: transparent;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
