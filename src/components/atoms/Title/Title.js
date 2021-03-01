import styled from 'styled-components';

const Title = styled.a`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.yellow};
  font-family: 'Advent Pro';
  user-select: none;
`;

export default Title;
