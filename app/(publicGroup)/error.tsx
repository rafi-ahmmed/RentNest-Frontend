"use client"

import React, { useEffect } from "react"
import Link from "next/link"
import { Home, RefreshCw, AlertTriangle, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ErrorProps } from "@/lib/types"

export default function PublicError({ error, reset }:ErrorProps) {
  useEffect(() => {
    console.error("Public Route Error Caught:", error)
  }, [error])

  return (
    <div className="flex min-h-[85vh] w-full items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md space-y-6 text-center">
        {/* 🎨 Emoji & Graphic Visual */}
        <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
          {/* Pulsing Red Glow */}
          <div className="absolute inset-0 animate-pulse rounded-full bg-destructive/15 blur-2xl" />

          {/* Card Frame */}
          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl border border-destructive/20 bg-card shadow-lg">
            <span className="animate-bounce text-4xl select-none">🏢</span>
            <AlertTriangle className="absolute -right-1 -bottom-1 h-7 w-7 rounded-full border border-border bg-background p-1 text-destructive shadow-xs" />
          </div>
        </div>

        {/* 🏷️ Header Text */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-destructive/20 bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
            <span>Something Went Wrong</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Failed to Load Listings
          </h1>

          <p className="text-sm leading-relaxed text-muted-foreground">
            We encountered an unexpected error while fetching the requested
            information. Please try again or browse available properties.
          </p>

          {error?.digest && (
            <p className="pt-1 font-mono text-[11px] text-muted-foreground/60">
              Error Digest: {error.digest}
            </p>
          )}
        </div>

        {/* 🔘 Action Buttons */}
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

          {/* Go to Properties Page Button */}
          <Button
            
            variant="outline"
            size="lg"
            className="w-full gap-2 border-border/80 font-semibold sm:w-auto"
          >
            <Link
              href="/properties"
              className="inline-flex items-center justify-center"
            >
              <Building2 className="h-4 w-4" />
              <span>View Properties</span>
            </Link>
          </Button>
        </div>

        {/* Home Quick Link */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Go to Home Page</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
