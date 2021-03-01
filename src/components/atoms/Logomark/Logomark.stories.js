import React from 'react';
import styled from 'styled-components';
import Logomark from './Logomark';

const GreyBackground = styled.div`
  height: 400px;
  width: 100vw;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  title: 'components/atoms/Logomark',
  component: Logomark,
  decorators: [
    (Story) => (
      <GreyBackground>
        <Story />
      </GreyBackground>
    ),
  ],
};

export const Normal = () => <Logomark />;
export const Darkmode = () => <Logomark darkmode />;
