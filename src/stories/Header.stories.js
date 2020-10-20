import React from 'react';

import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,

};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};

export const Secondary = Template.bind({});
Secondary.args = {
title:"AKJ CodeLikeCrazy"
};


