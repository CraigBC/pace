import type { Meta, StoryObj } from "@storybook/react";
import {
  TextField,
  TextFieldProps,
} from "@/components/forms/components/TextField";

const meta: Meta<typeof TextField> = {
  title: "Form/Components/Text Field",
  component: TextField,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<TextFieldProps>;

// Adjusting the Basic story to use args for consistency
export const Basic: Story = {
  args: {
    label: "Email",
    name: "email",
    id: "email",
    placeholder: "you@example.com",
  },
};

export const WithHelpText: Story = {
  args: {
    label: "Email",
    name: "email",
    id: "email",
    placeholder: "you@example.com",
    helpText: "We'll only use this for spam.",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    name: "email",
    id: "email",
    placeholder: "you@example.com",
    error: "Not a valid email address.",
  },
};
