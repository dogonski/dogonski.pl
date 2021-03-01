import styled, { css } from 'styled-components';

const Link = styled.a`
  display: block;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.grey};
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.white};
      background: rgba(0, 0, 0, 0.4);
      width: 100vw;
      height: 540px;
      text-align: center;
      line-height: 540px;
      text-decoration: none;
      opacity: 0;
      transition: all 0.5s ease;

      &:hover {
        opacity: 1;
        text-decoration: none;
      }
    `}
`;

export default Link;
