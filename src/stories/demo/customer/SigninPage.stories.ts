import type { Meta, StoryObj } from "@storybook/react";
import SigninExample from "@/components/examples/customer/SigninPage";

const meta = {
  title: "Demo/Customer/Sign in",
  component: SigninExample,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SigninExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
