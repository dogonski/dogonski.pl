import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: calc(60px + 40 * ((100vw - 375px) / 265));
  line-height: calc(60px + 40 * ((100vw - 375px) / 265));
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.grey};
  font-family: 'Advent Pro';
  margin: 0;
  user-select: none;

  ${({ darkmode }) =>
    darkmode &&
    css`
      color: ${({ theme }) => theme.white};
    `}
`;

export default Heading;
