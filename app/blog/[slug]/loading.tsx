import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPostLoading() {
  return (
    <div className="py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-64 rounded-3xl" />
        <Skeleton className="h-96 rounded-3xl" />
      </div>
    </div>
  );
}
