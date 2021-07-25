import React from "react";
import { Story, Meta } from "@storybook/react";
import { NavItem } from ".";
import { NavItemProps } from "../../models/navitem";
import { HiCode } from "react-icons/hi";

export default {
   title: "NavItem",
   component: NavItem,
} as Meta;

const Template: Story<NavItemProps> = (args) => <NavItem {...args} />;

export const Default = Template.bind({});
Default.args = {
   children: "Portfolio",
   icon: <HiCode />,
   active: false,
   type: "link",
};
