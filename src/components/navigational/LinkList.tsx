import React from "react";
import Link from "next/link";

export interface LinkListItem {
  title: string; // Renamed from 'name' for generality
  description: string;
  href: string;
}

interface LinkListProps {
  items: LinkListItem[];
  viewAllHref: string; // Allows customization of the "View all" link
}

const LinkList: React.FC<LinkListProps> = ({ items, viewAllHref }) => {
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {items.map((item, index) => (
          <li
            key={item.description} // Consider using a more unique key if possible
            className="flex items-center justify-between gap-x-6 py-5"
          >
            <div className="flex min-w-0 gap-x-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-500">
                <span className="text-lg font-medium leading-none text-white">
                  {index + 1}
                </span>
              </span>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {item.title}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
            <Link
              href={item.href}
              className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              View
            </Link>
          </li>
        ))}
      </ul>
      <a
        href={viewAllHref}
        className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
      >
        View all
      </a>
    </div>
  );
};

export default LinkList;
