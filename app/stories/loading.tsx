import { Skeleton } from "@/components/ui/skeleton";

export default function StoriesLoading() {
  return (
    <div className="py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <Skeleton className="h-16 w-3/5" />
        <Skeleton className="h-64 rounded-3xl" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="h-64 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
