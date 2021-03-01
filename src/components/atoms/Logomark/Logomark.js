import styled, { css } from 'styled-components';
import logo from 'assets/logo.svg';
import logoDark from 'assets/logodark.svg';

const Logomark = styled.div`
  width: 80vw;
  height: 30vw;

  background-image: url(${logoDark});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;

  ${({ darkmode }) =>
    darkmode &&
    css`
      background-image: url(${logo});
    `}
`;

export default Logomark;
