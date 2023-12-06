import Image from "next/image";
import Link from "next/link";

import { demos } from "@/lib/demos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {demos.map((demo) => {
        return (
          <div
            className="text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4"
            key={demo.slug}
          >
            <Link href={demo.slug}>
              <button className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <h2 className={`mb-3 text-2xl font-semibold`}>{demo.title}</h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  {demo.description}
                </p>
              </button>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
