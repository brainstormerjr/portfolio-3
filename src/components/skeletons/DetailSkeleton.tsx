export default function DetailSkeleton() {
  return (
    <div className="mt-48 md:mt-128 mb-30 px-6 md:px-48">
      <div className="absolute top-0 left-0 w-full h-80 md:h-196 -z-30 skeleton mask-b-from-0% mask-b-to-100%" />

      <div className="skeleton w-32 h-10 mb-8 md:mb-12" />

      <div className="flex justify-center mb-4 md:mb-6">
        <div className="skeleton h-10 md:h-20 w-3/4" />
      </div>
      <div className="flex justify-center mb-8 md:mb-12">
        <div className="skeleton h-6 md:h-7 w-1/2" />
      </div>

      <div className="flex gap-3 flex-wrap justify-center mb-8 md:mb-12">
        <div className="skeleton h-10 w-20" />
        <div className="skeleton h-10 w-24" />
        <div className="skeleton h-10 w-16" />
        <div className="skeleton h-10 w-28" />
      </div>

      <div className="flex items-center justify-center gap-3 md:gap-5 mb-8 md:mb-12 flex-wrap">
        <div className="skeleton h-12 w-full md:w-64" />
        <div className="skeleton h-12 w-full md:w-64" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="skeleton h-9 w-1/3 mt-4 mb-2" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-5/6" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-4/5" />
        <div className="skeleton h-9 w-1/4 mt-4 mb-2" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-11/12" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-3/4" />
      </div>
    </div>
  );
}
