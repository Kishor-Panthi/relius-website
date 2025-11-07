import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
  return (
    <div className="py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <Skeleton className="h-20 w-2/3" />
        <Skeleton className="h-64 rounded-3xl" />
        <div className="grid gap-6 md:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <Skeleton key={index} className="h-48 rounded-3xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
