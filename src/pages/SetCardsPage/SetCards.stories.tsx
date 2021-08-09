import React, { Component, ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";

import SetCards from '.';

export default {
  title: 'Components/SetCards',
  Component: SetCards
} as Meta

const Template: Story<ComponentProps<typeof SetCards>> = (args) => <SetCards {...args} />

export const SetCardsDefault = Template.bind({});
SetCardsDefault.args = {
  cards:
    [
      {
        name: 'Black Lotus',
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=3&type=card'
      }
    ]
}

