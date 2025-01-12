import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-secondary-400" />
      <h2 className="text-xl font-semibold">
        صفحه ای که دنبالش بودید - پیدا نشد
      </h2>
      <p>پستی با این مشخصات پیدا نشد</p>
      <Link
        href="/profile/posts"
        className="mt-4 rounded-md bg-primary-500 px-4 py-2 text-sm text-white transition-colors hover:bg-primary-400"
      >
        برگشت
      </Link>
    </main>
  );
}
