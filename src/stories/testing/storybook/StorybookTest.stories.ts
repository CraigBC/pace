import type { Meta, StoryObj } from "@storybook/react";
import StorybookTestComponent, {
  StoryBookTestComponentParams,
} from "@/components/StorybookTestComponent";

const meta: Meta<typeof StorybookTestComponent> = {
  title: "Testing/Storybook/Controls",
  component: StorybookTestComponent,
  parameters: { controls: { expanded: true } },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    booleanParam: {
      control: "boolean",
    },
    numberParam: {
      control: { type: "number", min: 400, max: 1200, step: 50 },
    },
    rangeParam: {
      control: { type: "range", min: 200, max: 1500, step: 50 },
    },
    objectParam: {
      control: "object",
    },
    arrayParam: {
      control: "object",
    },
    fileParam: {
      control: {
        type: "file",
        accept: ".png",
      },
    },
    radioParam: {
      control: "radio",
      options: ["email", "phone", "mail"],
    },
    inlineRadioParam: {
      control: "inline-radio",
      options: ["email", "phone", "mail"],
    },
    checkParam: {
      control: "check",
      options: ["email", "phone", "mail"],
    },
    inlineCheckParam: {
      control: "inline-check",
      options: ["email", "phone", "mail"],
    },
    selectParam: {
      control: "select",
      options: [20, 30, 40, 50],
    },
    multiSelectParam: {
      control: "multi-select",
      options: [20, 30, 40, 50],
    },
    textParam: {
      control: "text",
    },
    colorParam: {
      control: { type: "color", presetColors: ["red", "green"] },
    },
    dateParam: {
      control: "date",
    },
  },
} satisfies Meta<typeof StorybookTestComponent>;

export default meta;
type Story = StoryObj<StoryBookTestComponentParams>;

export const AllControls: Story = {
  args: {},
};
