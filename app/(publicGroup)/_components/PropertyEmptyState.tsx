import React from "react"
import { Building2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PropertyEmptyStateProps {
  title?: string
  description?: string
  onReset?: () => void
}

export function PropertyEmptyState({
  title = "No properties found",
  description = "We couldn't find any properties matching your search or filter criteria. Try adjusting your filters.",
  onReset,
}: PropertyEmptyStateProps) {
  return (
    <div className="flex min-h-95 w-full animate-in flex-col items-center justify-center rounded-2xl border border-dashed border-border/70 bg-muted/20 p-8 text-center fade-in-50">
      
      <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card shadow-xs">
        <Building2 className="h-8 w-8 text-muted-foreground/60" />
        <span className="absolute -top-1 -right-1 text-base select-none">
          🔍
        </span>
      </div>

      
      <div className="max-w-md space-y-1.5">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      
      {onReset && (
        <Button
          onClick={onReset}
          variant="outline"
          size="sm"
          className="mt-6 gap-2 border-border/80 font-medium shadow-2xs hover:bg-card"
        >
          <RefreshCw className="h-3.5 w-3.5 text-muted-foreground" />
          <span>Reset all filters</span>
        </Button>
      )}
    </div>
  )
}
