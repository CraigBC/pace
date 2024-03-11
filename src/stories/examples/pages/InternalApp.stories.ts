import type { Meta, StoryObj } from "@storybook/react";
import InternalApp from "@/components/examples/InternalApp";

const meta = {
  title: "Page Examples/Internal App",
  component: InternalApp,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InternalApp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
