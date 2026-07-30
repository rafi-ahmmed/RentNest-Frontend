"use client"

import React, { useEffect } from "react"
import Link from "next/link"
import { Home, RefreshCw, AlertTriangle, Bug } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ErrorProps } from "@/lib/types"

export default function GlobalError({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="relative mx-auto flex items-center justify-center">
          <div className="absolute h-36 w-36 animate-pulse rounded-full bg-destructive/15 blur-2xl" />

          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl border border-destructive/20 bg-card shadow-xl">
            <AlertTriangle className="h-12 w-12 animate-bounce text-destructive" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-destructive/20 bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
            <Bug className="h-3.5 w-3.5" />
            <span>Something went wrong</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Unexpected Error
          </h1>

          <p className="text-sm leading-relaxed text-muted-foreground">
            An unexpected error occurred while processing your request.
            Don&apos;t worry, you can try again or return to safety.
          </p>

          {error.digest && (
            <p className="pt-1 font-mono text-[11px] text-muted-foreground/60">
              Error Digest: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
          {/* Try Again Button */}
          <Button
            onClick={() => reset()}
            variant="default"
            size="lg"
            className="w-full gap-2 font-semibold shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Try Again</span>
          </Button>

          {/* Go Home Button */}
          <Button
            variant="outline"
            size="lg"
            className="w-full gap-2 border-border/80 font-semibold sm:w-auto"
          >
            <Link href="/" className="inline-flex items-center justify-center">
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
