import React from "react";

// Define a type that allows either title or children but not both
type ExclusiveProps =
  | { title: string; children?: never }
  | { title?: never; children: React.ReactNode };

const Heading = ({ headingText }: { headingText: string }) => (
  <h3 className="text-base font-semibold leading-6 text-neutral-900">
    {headingText}
  </h3>
);

const Section = ({ children }: { children: React.ReactNode }) => (
  <div className="border-b border-gray-200 pb-5">{children}</div>
);

const SectionHeading = ({ title, children }: ExclusiveProps) => {
  return (
    <Section>{title ? <Heading headingText={title} /> : children}</Section>
  );
};

export default SectionHeading;
