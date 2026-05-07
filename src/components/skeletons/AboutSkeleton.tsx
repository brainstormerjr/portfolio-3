import ExperienceCardSkeleton from "./ExperienceCardSkeleton";

export default function AboutSkeleton() {
  return (
    <div className="max-h-full">
      <section className="mb-30">
        <div className="skeleton w-full h-100 mb-10" />
        <div className="flex flex-col gap-3 mb-4">
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-5/6" />
          <div className="skeleton h-4 w-4/5" />
        </div>
        <div className="flex flex-col gap-3 mb-4">
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-11/12" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-3/4" />
        </div>
      </section>

      {[0, 1, 2].map((s) => (
        <section key={s} className="mb-30">
          <div className="skeleton h-6 w-48 mb-4" />
          <div className="flex flex-col gap-5">
            <ExperienceCardSkeleton />
            <ExperienceCardSkeleton />
          </div>
        </section>
      ))}
    </div>
  );
}
