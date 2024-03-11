import type { Meta, StoryObj } from "@storybook/react";
import SectionHeading from "@/components/sectioning/SectionHeading";

const meta = {
  title: "Sectioning/Section Heading",
  component: SectionHeading,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
