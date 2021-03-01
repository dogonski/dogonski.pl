import styled from 'styled-components';

const Description = styled.p`
  color: ${({ theme }) => theme.grey};
  font-size: 20px;
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  max-width: 960px;

  &::selection {
    background: ${({ theme }) => theme.yellow};
  }
`;

export default Description;
