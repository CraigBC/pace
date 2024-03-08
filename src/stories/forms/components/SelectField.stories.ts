import type { Meta, StoryObj } from "@storybook/react";
import {
  SelectField,
  SelectFieldProps,
} from "@/components/forms/components/SelectField";

const meta: Meta<typeof SelectField> = {
  title: "Form/Components/Select Field",
  component: SelectField,
  parameters: {},
  argTypes: {
    label: { control: "text" },
    name: { control: "text" },
    id: { control: "text" },
    textPlaceholder: { control: "text" },
    helpText: { control: "text" },
    error: { control: "text" },
    selectOptions: { control: "object" },
  },
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<SelectFieldProps>;

export const Basic: Story = {
  args: {
    label: "Country",
    name: "select-country",
    id: "select_country",
    textPlaceholder: "Select country",
    selectOptions: ["England", "Scotland", "Wales"],
  },
};

export const WithHelpText: Story = {
  args: {
    label: "Country",
    name: "select-country",
    id: "select_country",
    textPlaceholder: "Select country",
    helpText: "This is your location.",
    selectOptions: ["England", "Scotland", "Wales"],
  },
};

export const WithError: Story = {
  args: {
    label: "Country",
    name: "select-country",
    id: "select_country",
    textPlaceholder: "Select country",
    selectOptions: ["England", "Scotland", "Wales"],
    error: "No country selected.",
  },
};
