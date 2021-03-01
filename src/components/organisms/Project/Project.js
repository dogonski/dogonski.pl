import React from 'react';
import PropTypes from 'prop-types';
import ProjectImage from 'components/molecules/ProjectImage/ProjectImage';
import Title from 'components/atoms/Title/Title';
import Description from 'components/atoms/Description/Description';
import Link from 'components/atoms/Link/Link';
import styled from 'styled-components';
import { device } from 'device';

const StyledWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: flex-start;
  transform: translateY(-67px);

  @media ${device.mobile} {
    transform: translateY(-96px);
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    margin-bottom: 40px;
    transform: translateY(-125px);
  }
  @media ${device.laptop} {
    margin-bottom: 80px;
    transform: translateY(-88px);
  }
  @media ${device.desktop} {
    margin-bottom: 150px;
    transform: translateY(-100px);
  }
`;

const StyledTitle = styled(Title)`
  justify-self: start;
  margin-left: -6px;
  font-size: 70px;

  @media ${device.mobile} {
    margin-left: -8px;
    font-size: 100px;
  }
  @media ${device.tablet} {
    margin-left: -10px;
    font-size: 130px;
  }
  @media ${device.laptop} {
    margin-left: -16px;
    font-size: 170px;
  }
  @media ${device.desktop} {
    font-size: 200px;
  }
`;
const StyledDescription = styled(Description)`
  max-width: calc(100vw - 140px);
  margin: 5px 10px 0 3px;
  font-size: 16px;

  @media ${device.mobile} {
    font-size: 18px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
  @media ${device.desktop} {
    font-size: 20px;
    max-width: 940px;
  }
`;
const StyledLink = styled(Link)`
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 10px;
  font-size: 18px;
  color: ${({ theme }) => theme.lightgrey};

  @media ${device.mobile} {
  }
  @media ${device.tablet} {
    font-size: 20px;
    line-height: 20px;
  }
  @media ${device.laptop} {
    font-size: 22px;
    line-height: 22px;
    bottom: 37px;
  }
  @media ${device.desktop} {
    font-size: 24px;
    line-height: 24px;
    bottom: 25px;
  }
`;

const Project = ({ title, backgroundImage, githubLink, content, projectLink }) => (
  <>
    <ProjectImage backgroundImage={backgroundImage} projectLink={projectLink} />
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{content}</StyledDescription>
      <StyledLink href={githubLink}>Github →</StyledLink>
    </StyledWrapper>
  </>
);

Project.propTypes = {
  backgroundImage: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  content: PropTypes.string,
  projectLink: PropTypes.string.isRequired,
};

Project.defaultProps = {
  content: 'it is my latest project, just take a look',
};
export default Project;
