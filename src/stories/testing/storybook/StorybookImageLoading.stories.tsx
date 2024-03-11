import type { Meta, StoryObj } from "@storybook/react";

import ImageTest from "@/components/test/Image";

const meta: Meta<typeof ImageTest> = {
  title: "Testing/Storybook/Image Loading",
  component: ImageTest,
};

export default meta;
type Story = StoryObj<typeof ImageTest>;

// Assume image.png is located in the "public" directory.
export const WithAnImage: Story = {
  render: () => <img src="/pace-ui-logo.png" alt="my image" />,
};
