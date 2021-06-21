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
  backgroundColor: '#68c86b',
  color: '#fff',
  fontFamily:'Raleway',
  fontWeight:400,
  border:'none',
  borderRadius:'3em',
  lineHeight:1,
  letterSpacing:'0.2px',
  fontSize: '16px',
  padding: '12px 74px',
  margin: '0px'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Link with Metrc',
  backgroundColor: 'blue',
  color: '#fff',
  fontFamily:'-apple-system, BlinkMacSystemFont, sans-serif',
  fontWeight:400,
  border:'none',
  borderRadius:'0px',
  lineHeight:1,
  letterSpacing:'0px',
  fontSize: '13px',
  padding: '10px',
  margin: '0px'
};