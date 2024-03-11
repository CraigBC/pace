import type { Meta, StoryObj } from "@storybook/react";
import PaymentForm from "@/components/examples/ecommerce/PaymentForm";

const meta = {
  title: "Demo/eCommerce/Payment Form",
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
