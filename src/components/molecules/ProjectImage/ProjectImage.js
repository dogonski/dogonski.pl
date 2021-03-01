import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from 'device';
import Link from 'components/atoms/Link/Link';

const Wrapper = styled.div`
  background-color: #b8b8b8;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  width: 100vw;
  height: 540px;
  background-size: cover;
  background-position: 50%;
  margin: 0;
  padding: 0;
`;
const StyledLink = styled(Link)`
  line-height: 540px;
  font-size: 24px;
  @media ${device.laptop} {
    font-size: 32px;
  }
`;

const ProjectImage = ({ backgroundImage, projectLink }) => (
  <Wrapper backgroundImage={backgroundImage}>
    <StyledLink href={projectLink} secondary>
      VIEW
    </StyledLink>
  </Wrapper>
);

ProjectImage.propTypes = {
  backgroundImage: PropTypes.elementType.isRequired,
  projectLink: PropTypes.string.isRequired,
};

export default ProjectImage;
