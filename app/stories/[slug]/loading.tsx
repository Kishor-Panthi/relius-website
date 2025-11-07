import { Skeleton } from "@/components/ui/skeleton";

export default function StoryLoading() {
  return (
    <div className="py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-10">
        <Skeleton className="h-48 rounded-3xl" />
        <Skeleton className="h-96 rounded-3xl" />
      </div>
    </div>
  );
}
