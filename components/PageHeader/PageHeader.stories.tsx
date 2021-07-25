import React from "react";
import { Story, Meta } from "@storybook/react";

import { PageHeader } from ".";
import { PageHeaderProps } from "../../models/pageheader";

export default {
   title: "PageHeader",
   component: PageHeader,
} as Meta;

const Template: Story<PageHeaderProps> = (args) => <PageHeader {...args} />;

export const LevelOne = Template.bind({});
LevelOne.args = {
   level: 1,
   children: "The quick brown fox jumps over the lazy dog",
};

export const LevelTwo = Template.bind({});
LevelTwo.args = {
   level: 2,
   children: "The quick brown fox jumps over the lazy dog",
};

export const LevelThree = Template.bind({});
LevelThree.args = {
   level: 3,
   children: "The quick brown fox jumps over the lazy dog",
};

export const LevelFour = Template.bind({});
LevelFour.args = {
   level: 4,
   children: "The quick brown fox jumps over the lazy dog",
};

export const LevelFive = Template.bind({});
LevelFive.args = {
   level: 5,
   children: "The quick brown fox jumps over the lazy dog",
};

export const LevelSix = Template.bind({});
LevelSix.args = {
   level: 6,
   children: "The quick brown fox jumps over the lazy dog",
};
