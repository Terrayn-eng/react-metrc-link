import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MetrcLink, MetrcLinkProps } from './MetrcLink';

export default {
  title: 'Example/MetrcLink',
  component: MetrcLink,
} as Meta;

export interface Response {
  /**
   * State passed into form
   */
  state:string;
  /**
   * User key passed into form
   */
  user_key?:string;
}

const Template: Story<MetrcLinkProps> = (args) => <MetrcLink {...args} />;

const handleCallback = (resp:Response) =>{
  console.log(resp.state, resp.user_key)
}

export const Primary = Template.bind({});
Primary.args = {
  callback: handleCallback,
  states:['CO','OR','CA','AK'],
  backendUrl:'http://127.0.0.1:5000/user_key',
  companyName: 'Terrayn',
  // privacyPolicyLink: 'https://www.google.com',
  label: 'Link with Metrc',
  backgroundColor: '#68c86b',
  color: '#fff',
  fontFamily:'Helvetica, sans-serif',
  fontWeight:340,
  border:'none',
  borderRadius:'3em',
  lineHeight:1,
  letterSpacing:'0.5px',
  fontSize: '16px',
  padding: '12px 74px',
  margin: '0px',
};

export const Secondary = Template.bind({});
Secondary.args = {
  callback: handleCallback,
  states:['CO','OR'],
  backendUrl:'http://127.0.0.1:5000/user_key',
  companyName: 'Lendica',
  privacyPolicyLink: 'https://www.google.com',
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