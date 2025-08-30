"use client";

import {
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <h4 className="text-4xl font-semibold" blue-gray>
            My Resume
          </h4>
          <div className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Download my resume and get in touch
          </div>
          <button
            className="flex items-center gap-2"
          >
            Download
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Resume;
