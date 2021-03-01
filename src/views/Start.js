import React from 'react';
import { Link } from 'react-router-dom';
import Logomark from 'components/atoms/Logomark/Logomark';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Subtitle from 'components/atoms/Subtitle/Subtitle';
import styled from 'styled-components';
import backgroundImage from 'assets/background_main.jpg';
import backgroundImageHD from 'assets/Piotr-8.jpg';
import { routes } from 'routes';
import { device } from 'device';

const StyledGrid = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: 40%;

  @media ${device.mobile} {
    background-position: 40%;
  }

  @media ${device.laptop} {
    background-image: url(${backgroundImageHD});
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  grid-row-start: 2;
  margin: auto 0;
`;

const StyledLogomark = styled(Logomark)`
  max-width: 300px;
  max-height: 100px;
  @media ${device.tablet} {
    max-width: 360px;
    max-height: 120px;
  }
  @media ${device.laptop} {
    max-width: 480px;
    max-height: 160px;
  }
  @media ${device.desktop} {
    max-width: 540px;
    max-height: 180px;
  }
`;
const StyledHeading = styled(Heading)`
  line-height: calc(50px + 10 * ((100vw - 320px) / 256));
  font-size: calc(50px + 10 * ((100vw - 320px) / 256));
  @media ${device.mobile} {
    line-height: 60px;
    font-size: 60px;
  }
  @media ${device.tablet} {
    line-height: 72px;
    font-size: 72px;
  }
  @media ${device.laptop} {
    line-height: 96px;
    font-size: 96px;
  }
  @media ${device.desktop} {
    font-size: 108px;
    line-height: 108px;
  } ;
`;
const StyledButton = styled(Button)`
  border-width: 3px;
  border-style: solid;
  border-color: ${({ theme }) => theme.yellow};
  line-height: 40px;
  height: 46px;
  font-size: 20px;
  max-width: 150px;

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 48px;
    height: 56px;
    max-width: 180px;
  }
  @media ${device.laptop} {
    border-width: 4px;
    font-size: 28px;
    line-height: 56px;
    height: 64px;
    max-width: 240px;
  }
  @media ${device.desktop} {
    font-size: 32px;
    border-width: 5px;
    line-height: 70px;
    height: 80px;
    max-width: 270px;
  }
`;
const StyledSubtitle = styled(Subtitle)`
  color: ${({ theme }) => theme.white};
  opacity: 0.4;
`;
const Start = () => (
  <>
    <StyledGrid>
      <InnerWrapper>
        <StyledLogomark darkmode />
        <StyledHeading darkmode>Piotr Dogoński</StyledHeading>
      </InnerWrapper>
      <StyledButton as={Link} to={routes.portfolio}>
        Portfolio
      </StyledButton>
      <StyledSubtitle />
    </StyledGrid>
  </>
);

export default Start;
