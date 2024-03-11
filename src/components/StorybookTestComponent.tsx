import React from "react";
import SectionHeading from "@/components/sectioning/SectionHeading";

interface BaseParam {
  type: string;
}

interface BooleanParam extends BaseParam {
  type: "boolean";
}

interface NumberParam extends BaseParam {
  type: "number";
  min: number;
  max: number;
  step: number;
}

interface RangeParam extends BaseParam {
  type: "range";
  min: number;
  max: number;
  step: number;
}

interface ObjectParam extends BaseParam {
  type: "object";
}

interface FileParam extends BaseParam {
  type: "file";
  accept: string;
}

interface RadioParam extends BaseParam {
  type: "radio" | "inline-radio";
  options: string[];
}

interface CheckParam extends BaseParam {
  type: "check" | "inline-check";
  options: string[];
}

interface SelectParam extends BaseParam {
  type: "select" | "multi-select";
  options: number[];
}

interface TextParam {
  type: "text";
}

interface ColorParam extends BaseParam {
  type: "color";
  colors: string[];
}

interface DateParam extends BaseParam {
  type: "date";
}

type Param =
  | BooleanParam
  | NumberParam
  | RangeParam
  | ObjectParam
  | FileParam
  | RadioParam
  | CheckParam
  | SelectParam
  | TextParam
  | ColorParam
  | DateParam;

export interface StoryBookTestComponentParams {
  [key: string]: Param;
}

// Example StoryBookTestComponentParams Interface
const exampleParams: StoryBookTestComponentParams = {
  booleanParam: {
    type: "boolean",
  },
};

const StorybookTestComponent: React.FC<StoryBookTestComponentParams> = (
  props
) => {
  return (
    <div>
      <SectionHeading title="Storybook Test Component" />
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default StorybookTestComponent;
