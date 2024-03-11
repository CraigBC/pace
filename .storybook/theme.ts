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
    'Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontCode:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  textColor: "#171717",
  textInverseColor: "#fafafa",
  textMutedColor: "#d4d4d4",
  barTextColor: "#737373",
  barHoverColor: "#2563eb",
  barSelectedColor: "#2563eb",
  barBg: "#fafafa",
  buttonBg: "#f5f5f5",
  buttonBorder: "transparent",
  booleanBg: "#bfdbfe",
  booleanSelectedBg: "#ffffff",
  inputBg: "#ffffff",
  inputBorder: "#d4d4d4",
  inputTextColor: "#171717",
  inputBorderRadius: 6,
  brandTitle: "PaceUI - Storybook",
  brandUrl: "https://pace.britishcycling.org.uk",
  brandImage: "https://pace.britishcycling.org.uk/pace-ui-logo.png",
  brandTarget: "_self",
  gridCellSize: 12,
});
