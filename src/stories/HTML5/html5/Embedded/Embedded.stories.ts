import type { Meta, StoryObj } from '@storybook/react';
import Embedded from "./index";


const meta = {
    title: 'HTML5/All Embedded Elements',
    component: Embedded,
    parameters: {
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
    },
} satisfies Meta<typeof Embedded>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
    },
};
