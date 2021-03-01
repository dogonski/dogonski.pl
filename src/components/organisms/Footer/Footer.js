import React from 'react';
import styled from 'styled-components';
import Link from 'components/atoms/Link/Link';
import { device } from 'device';

const StyledWrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 80px;
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

const Line = styled.div`
  display: block;
  height: 1px;
  width: 90vw;
  margin: 25px 5vw 10px;
  background-color: ${({ theme }) => theme.lightgrey};
  opacity: 0.5;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  text-transform: lowercase;
  justify-self: flex-start;
  margin-right: 20px;
  @media ${device.tablet} {
    font-size: 20px;
    margin-right: 24px;
  }
  @media ${device.laptop} {
    font-size: 20px;
    margin-right: 32px;
  }
  @media ${device.desktop} {
    font-size: 22px;
    margin-right: 36px;
  }
`;

const Footer = () => (
  <>
    <Line />
    <StyledWrapper>
      <StyledLink href="https://www.linkedin.com/in/dogo%C5%84ski/" target="_blank">
        linkedin
      </StyledLink>
      <StyledLink href="https://github.com/dogonski" target="_blank">
        github
      </StyledLink>
      <StyledLink href="mailto:pdogonski@gmail.com" target="_blank">
        email
      </StyledLink>
    </StyledWrapper>
  </>
);

export default Footer;
