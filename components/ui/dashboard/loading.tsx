import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="w-full max-w-screen-lg mx-auto p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div key={idx} className="flex flex-col space-y-4">
          <div className="space-y-4">
            <Skeleton className="h-4 w-[250px] sm:w-full" />
            <Skeleton className="h-4 w-[250px] sm:w-full" />
          </div>
          <Skeleton className="h-[125px] w-[250px] sm:w-full rounded-xl" />
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, lineIdx) => (
              <Skeleton
                key={lineIdx}
                className="h-4 w-[200px] sm:w-3/4 md:w-full"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
