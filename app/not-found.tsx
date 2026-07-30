import React from "react"
import Link from "next/link"
import { Home, Building2, ArrowLeft, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GlobalNotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* 🎨 Emoji & Big 404 Visual Header */}
        <div className="relative mx-auto flex items-center justify-center">
          {/* Subtle Background Glow */}
          <div className="absolute h-40 w-40 animate-pulse rounded-full bg-primary/10 blur-3xl" />

          {/* 404 Large Text Container */}
          <div className="z-10 flex items-center justify-center">
            <span className="text-8xl font-black tracking-tighter text-green-400 drop-shadow-md select-none">
              404
            </span>
          </div>
        </div>

        {/* 🏷️ Header & Description */}
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Page Not Found
          </h1>

          <p className="text-sm leading-relaxed text-muted-foreground">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>

        {/* 🔘 Navigation Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
          <Button
            
            variant="default"
            size="lg"
            className="w-full px-8 font-semibold shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2"
            >
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </Button>
        </div>

        {/* 💡 Extra Tip/Footer */}
        <p className="pt-4 text-xs text-muted-foreground/70">
          Need help? Contact support or try searching for another location.
        </p>
      </div>
    </div>
  )
}
