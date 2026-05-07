export default function ExperienceCardSkeleton() {
  return (
    <div className="flex flex-col md:flex-row border-1 border-transparent p-3">
      <div className="md:min-w-55 flex flex-col gap-2 mb-3 md:mb-0">
        <div className="skeleton h-4 w-40" />
        <div className="skeleton h-4 w-32" />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="skeleton h-4 w-48" />
        <div className="skeleton h-4 w-72" />
        <div className="skeleton h-4 w-full max-w-160 mb-1" />
        <div className="skeleton h-4 w-full max-w-150 mb-1" />
        <div className="flex gap-3 mt-2">
          <div className="skeleton h-10 w-20" />
          <div className="skeleton h-10 w-24" />
          <div className="skeleton h-10 w-16" />
        </div>
      </div>
    </div>
  );
}
