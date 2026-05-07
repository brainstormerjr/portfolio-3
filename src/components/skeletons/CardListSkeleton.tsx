export default function CardListSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="mb-30">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="w-full flex flex-col md:flex-row gap-5 border-1 border-transparent p-3"
        >
          <div className="skeleton w-full md:w-auto md:min-w-60 h-45" />
          <div className="flex-1 flex flex-col gap-3">
            <div className="skeleton h-5 w-72" />
            <div className="skeleton h-4 w-96" />
            <div className="flex gap-3 mt-2">
              <div className="skeleton h-10 w-20" />
              <div className="skeleton h-10 w-24" />
              <div className="skeleton h-10 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
