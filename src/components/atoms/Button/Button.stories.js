import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const GreyBackground = styled.div`
  height: 200px;
  width: 500px;
  background: #717171;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  title: 'components/atoms/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
    onClick: { action: 'clicked' },
  },
  decorators: [(Story) => <GreyBackground>{Story()}</GreyBackground>],
};

// export const Portfolio = () => <Button primary>Portfolio</Button>;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { color: '#ff0', label: 'Button' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: '😄👍😍💯' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: '📚📕📈🤓' };
