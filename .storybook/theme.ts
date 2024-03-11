import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  // VARS
  colorPrimary: "#2563eb",
  colorSecondary: "#525252",
  appBg: "#fafafa",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#d4d4d4",
  appBorderRadius: 4,
  fontBase:
    '"Inter var", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  // fontCode: string;
  textColor: "#171717",
  textInverseColor: "#fafafa",
  textMutedColor: "#d4d4d4",
  barTextColor: "#737373",
  barHoverColor: "#2563eb",
  barSelectedColor: "#2563eb",
  barBg: "#fafafa",
  buttonBg: "#2563eb",
  buttonBorder: "transparent",
  // booleanBg: "string";
  // booleanSelectedBg: "string";
  inputBg: "#ffffff",
  inputBorder: "#d4d4d4",
  inputTextColor: "#171717",
  inputBorderRadius: 6,
  brandTitle: "PaceUI - Storybook",
  brandUrl: "https://pace.britishcycling.org.uk",
  brandImage: "https://pace.britishcycling.org.uk/pace-ui-logo.png",
  brandTarget: "_self",
  // gridCellSize?: number;
});
