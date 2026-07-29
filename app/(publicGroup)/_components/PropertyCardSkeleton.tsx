import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function PropertyCardSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card
          key={index}
          className="flex flex-col justify-between overflow-hidden border border-border/60 bg-card p-0 shadow-xs"
        >
          <div className="relative h-52 w-full bg-muted">
            <Skeleton className="h-full w-full rounded-none" />

            <Skeleton className="absolute top-3 left-3 h-5 w-20 rounded-md bg-background/80" />

            <div className="absolute right-3 bottom-3 left-3 flex items-center gap-1.5">
              <Skeleton className="h-3.5 w-3.5 rounded-full" />
              <Skeleton className="h-3.5 w-3/4" />
            </div>
          </div>

          <CardHeader className="p-4 pb-2">
            <div className="flex items-center justify-between gap-2">
              <Skeleton className="h-5 w-3/5" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
          </CardHeader>

          <CardContent className="space-y-3 p-4 pt-0">
            <div className="grid grid-cols-3 gap-2 rounded-lg bg-muted/50 p-2.5">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <Skeleton className="h-4 w-12 rounded-md" />
              <Skeleton className="h-4 w-14 rounded-md" />
              <Skeleton className="h-4 w-10 rounded-md" />
            </div>
          </CardContent>

          <CardFooter className="mt-auto flex items-center justify-between border-t border-border/50 bg-muted/20 p-4 pt-3">
            <div className="space-y-1">
              <Skeleton className="h-2.5 w-8" />
              <Skeleton className="h-5 w-20" />
            </div>

            <Skeleton className="h-9 w-28 rounded-md" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
