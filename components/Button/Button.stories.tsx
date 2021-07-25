import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button } from ".";
import { ButtonProps } from "../../models/button";

export default {
   title: "Button",
   component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   type: "primary",
   children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
   type: "secondary",
   children: "Secondary Button",
};

export const Link = Template.bind({});
Link.args = {
   type: "link",
   children: "Link Button",
};
