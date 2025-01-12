

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function HeaderSkeleton() {
  return (
    <div
      className={`${shimmer} bg-secondary-0 rounded-xl flex items-center justify-between py-5 px-4 lg:px-8`}
    >
      <div className="h-6 w-36 bg-secondary-200 rounded-lg" />
      <div className="h-6 w-6 rounded-full bg-secondary-200 ml-2"></div>
    </div>
  );
}
