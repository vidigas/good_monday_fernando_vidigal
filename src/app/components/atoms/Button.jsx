import styled from 'styled-components';

const Button = styled.button`
  background-color: #e4613b;
  border-radius: 20px;
  padding: 3px 20px 6px;
  text-transform: uppercase;
  text-align: center;
  vertical-align: middle;
  color: white;
  height: 50px;
  margin: 25px 15px 0 0;
  font-size: 14px;

  :focus {
    outline: 0;
  }

  ${(props) => props.customStyle};
`;

export default Button;
