import React from "react"

interface GlobalLoadingProps {
  emoji?: string // নেভবারের ইমোজি এখানে পাস করতে পারবেন (যেমন: "🏠")
  title?: string
  subtitle?: string
}

const GlobalLoading = ({
  emoji = "🏠", // ডিফল্ট ইমোজি
  title = "Loading...",
  subtitle = "Please wait a moment",
}: GlobalLoadingProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-4 flex w-full max-w-xs flex-col items-center justify-center space-y-4 rounded-2xl border border-border/40 bg-card/50 p-6 text-center shadow-xl">
        {/* Spinner Outer Ring with Center Emoji */}
        <div className="relative flex items-center justify-center">
          {/* Animated Spinner Ring */}
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />

          {/* Center Emoji */}
          <div className="absolute inset-0 flex animate-pulse items-center justify-center text-2xl select-none">
            {emoji}
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-1">
          <h3 className="text-base font-semibold tracking-wide text-foreground">
            {title}
          </h3>
          <p className="animate-pulse text-xs text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

export default GlobalLoading
