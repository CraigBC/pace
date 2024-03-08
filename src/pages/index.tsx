import LogoBanner from "@/components/wip/LogoBanner";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          PaceUI
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="https://pace-storybook.vercel.app/"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            See Storybook
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-neutral-900"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <LogoBanner />
    </div>
  );
}
