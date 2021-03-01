import React from 'react';
import styled from 'styled-components';
import { device } from 'device';

const Copyrights = styled.p`
  display: block;
  position: absolute;
  font-size: 10px;
  font-family: 'Open Sans';
  margin: 5px;
  bottom: 0;
  left: 0;
  color: ${({ theme }) => theme.lightgrey};
  @media ${device.mobile} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 12px;
  }
`;

const Subtitle = () => <Copyrights>Copyright © Piotr Dogoński 2021</Copyrights>;
export default Subtitle;
