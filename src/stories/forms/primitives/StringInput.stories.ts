import type { Meta, StoryObj } from "@storybook/react";
import StringInput from "@/components/forms/primitives/StringInput";

const meta: Meta<typeof StringInput> = {
  title: "Form/Primitives/String Input",
  component: StringInput,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    // Define a control for the `type` property
    type: {
      control: "select",
      options: ["text", "email", "search", "password", "url"],
      description: "Select the type of the input",
    },
  },
};

export default meta;

// Since we're now controlling the `type` via Storybook controls,
// we can define a more generalized story that allows users to
// select the input type from the control panel.
export const DefaultStringInput: StoryObj<typeof meta> = {
  args: {
    type: "text", // Default type
  },
};
