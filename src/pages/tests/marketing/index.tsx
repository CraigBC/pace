import LinkList, { LinkListItem } from "@/components/navigational/LinkList";
import SectionHeading from "@/components/sectioning/SectionHeading";
import DefaultLayout from "@/components/layout/DefaultLayout";

const pages: LinkListItem[] = [
  {
    title: "Example 1",
    description: "Lorem ipsum",
    href: "/tests/marketing/example-1",
  },
  {
    title: "Example 2",
    description: "Lorem ipsum",
    href: "/tests/marketing/example-2",
  },
  {
    title: "Example 3",
    description: "Lorem ipsum",
    href: "/tests/marketing/example-3",
  },
];

export default function Page() {
  return (
    <DefaultLayout>
      <SectionHeading title="Pricing page" />
      <LinkList items={pages} viewAllHref={"#"} />
    </DefaultLayout>
  );
}
