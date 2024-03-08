import type { Meta, StoryObj } from "@storybook/react";
import SelectInput from "@/components/forms/primitives/SelectInput";

const meta: Meta<typeof SelectInput> = {
  title: "Form/Primitives/Select Input",
  component: SelectInput,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

// Since we're now controlling the `type` via Storybook controls,
// we can define a more generalized story that allows users to
// select the input type from the control panel.
export const DefaultSelectInput: StoryObj<typeof meta> = {
  args: {
    options: ["England", "Scotland", "Wales"],
  },
};
