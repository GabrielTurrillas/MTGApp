import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";

import SetsPage from '.';

export default {
  title: 'Pages/SetsPage',
  Component: SetsPage
} as Meta

const Template: Story<ComponentProps<typeof SetsPage>> = (args) => <SetsPage {...args} />;

export const SetsPageDefault = Template.bind({});
SetsPageDefault.args = {}