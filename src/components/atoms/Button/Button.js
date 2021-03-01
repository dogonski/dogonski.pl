import styled, { css } from 'styled-components';

const Button = styled.button`
  display: block;
  width: 45vw;
  height: 58px;
  background: none;
  outline: none;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  user-select: none;
  justify-self: center;
  align-self: center;
  grid-row-start: 3;
  text-align: center;
  text-decoration: none;

  ${({ secondary }) =>
    secondary &&
    css`
      background: none;
    `}

  &:hover {
    background: ${({ theme }) => theme.yellow};
  }
`;

export default Button;
