export default function DefaultContainer(props: { children: any }) {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{props.children}</div>
  );
}
