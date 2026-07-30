"use client"

import React, { useEffect } from "react"
import Link from "next/link"
import {
  RefreshCw,
  LayoutDashboard,
  ShieldAlert,
  ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ErrorProps } from "@/lib/types"

export default function DashboardError({ error, reset }: ErrorProps) {
  console.error("Dashboard Error Caught:", error)

  return (
    <div className="flex min-h-[80vh] w-full items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-2xl border border-destructive/20 bg-card p-6 shadow-xl sm:p-8">
        <div className="flex flex-col items-center space-y-5 text-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-destructive/20 bg-destructive/10 shadow-inner">
            <div className="absolute inset-0 animate-pulse rounded-2xl bg-destructive/20 blur-xl" />
            <ShieldAlert className="relative z-10 h-10 w-10 animate-bounce text-destructive" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-destructive/20 bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
              <span>Dashboard Error</span>
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Unable to load dashboard data
            </h2>

            <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted-foreground">
              Something went wrong while fetching your dashboard analytics or
              data. Please try refreshing or return to main view.
            </p>

            {error?.digest && (
              <p className="pt-2 font-mono text-[11px] text-muted-foreground/60">
                Digest Code:{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">
                  {error.digest}
                </code>
              </p>
            )}
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-3 pt-3 sm:flex-row">
            <Button
              onClick={() => reset()}
              variant="default"
              size="lg"
              className="w-full gap-2 font-semibold shadow-xs transition-transform active:scale-95 sm:w-auto"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Retry Request</span>
            </Button>

            {/* Back to Main Dashboard Overview */}
            <Button
              variant="outline"
              size="lg"
              className="w-full gap-2 border-border/80 font-semibold sm:w-auto"
            >
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard Home</span>
              </Link>
            </Button>
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Public Site</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
