import React from 'react';
import styled from 'styled-components';
import { device } from 'device';
import Logomark from 'components/atoms/Logomark/Logomark';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  padding: 10px;
  margin: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media ${device.tablet} {
    height: 80px;
  }
  @media ${device.laptop} {
    height: 90px;
  }
  @media ${device.desktop} {
    height: 100px;
  }
`;

const StyledLogomark = styled(Logomark)`
  width: 100px;
  background-size: 80%;
  height: 50px;
  @media ${device.mobile} {
    width: 110px;
    height: 55px;
  }
  @media ${device.tablet} {
    width: 120px;
    height: 60px;
  }
  @media ${device.laptop} {
    width: 140px;
    height: 70px;
  }
  @media ${device.desktop} {
    width: 160px;
    height: 80px;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 24px;
  line-height: 24px;
  margin-left: 5px;
  @media ${device.mobile} {
    font-size: 26px;
  }
  @media ${device.tablet} {
    font-size: 28px;
  }
  @media ${device.laptop} {
    font-size: 32px;
  }
  @media ${device.desktop} {
    font-size: 36px;
  }
`;

const Header = () => (
  <StyledWrapper>
    <StyledLogomark />
    <StyledHeading>Piotr Dogoński</StyledHeading>
  </StyledWrapper>
);

export default Header;
