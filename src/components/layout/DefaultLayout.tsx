import DefaultContainer from "@/components/layout/DefaultContainer";

export default function DefaultLayout(props: { children: any }) {
  return (
    <div className="h-full bg-white py-12">
      <DefaultContainer>{props.children}</DefaultContainer>
    </div>
  );
}
