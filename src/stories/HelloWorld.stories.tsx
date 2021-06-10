import React from 'react';
import { Story, Meta } from '@storybook/react';

import { HelloWorld, HelloWorldProps } from './HelloWorld';

export default {
  title: 'Example/HelloWorld',
  component: HelloWorld,
} as Meta;

const LogOnClick = () => console.log('hello')


const Template: Story<HelloWorldProps> = (args) => <HelloWorld {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'HelloWorld',
  size: 'medium',
  backgroundColor: 'blue',
  color: '#fff',
};