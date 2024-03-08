import { addons } from "@storybook/manager-api";
import customTheme from "./theme"; // Make sure this matches the name of your theme file

addons.setConfig({
  theme: customTheme,
});
