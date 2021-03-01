import React from 'react';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import Project from 'components/organisms/Project/Project';
import Subtitle from 'components/atoms/Subtitle/Subtitle';
import styled from 'styled-components';

import composerImg from 'assets/screen01.png';
import dodecaphonyImg from 'assets/screen02.png';

const projects = [
  {
    id: 1,
    title: 'composer',
    backgroundImage: composerImg,
    content: 'imagined composer portfolio with creative audio visuals',
    projectLink: 'https://composer-site.netlify.app/index.html',
    githubLink: 'https://github.com/dogonski/composer-site',
  },
  {
    id: 2,
    title: 'dodecaphony',
    backgroundImage: dodecaphonyImg,
    content: 'simple but usefull tool for generating dodecaphonic series and more',
    projectLink: 'https://composer-site.netlify.app/index.html',
    githubLink: 'https://github.com/dogonski/dodekafonia',
  },
];
const Wrapper = styled.div`
  position: relative;
`;

const ProjectsTemplate = () => (
  <>
    <Wrapper>
      <Header />
      {projects.map(({ id, backgroundImage, title, content, projectLink, githubLink }) => (
        <Project id={id} backgroundImage={backgroundImage} title={title} content={content} projectLink={projectLink} githubLink={githubLink} key={id} />
      ))}
      <Footer />
      <Subtitle />
    </Wrapper>
  </>
);
export default ProjectsTemplate;
