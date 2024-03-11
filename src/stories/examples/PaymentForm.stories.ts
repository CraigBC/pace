import type { Meta, StoryObj } from "@storybook/react";
import PaymentForm from "@/components/examples/PaymentForm";

const meta = {
  title: "Page Examples/Payment Form",
  component: PaymentForm,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PaymentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
