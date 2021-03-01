import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';

const GreyBackground = styled.div`
  height: 200px;
  width: 100vw;
  background: #717171;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  title: 'components/atoms/Heading',
  component: Heading,
  decorators: [
    (Story) => (
      <GreyBackground>
        <Story />
      </GreyBackground>
    ),
  ],
};

export const Name = () => <Heading>Piotr Dogoński</Heading>;
export const Secondary = () => <Heading secondary>Piotr Dogoński</Heading>;
