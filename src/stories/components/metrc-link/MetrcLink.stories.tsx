import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MetrcLink, MetrcLinkProps } from './MetrcLink';

export default {
  title: 'Example/MetrcLink',
  component: MetrcLink,
} as Meta;

const Template: Story<MetrcLinkProps> = (args) => <MetrcLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Link with Metrc',
  size: 'large',
  backgroundColor: '#68c86b',
  color: '#fff',
};