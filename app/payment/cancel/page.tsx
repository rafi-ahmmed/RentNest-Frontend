import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { XCircle, ArrowRight, RefreshCw, AlertTriangle } from "lucide-react"

export default function PaymentCancelPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
          {/* Background Pulse Animation */}
          <div className="absolute inset-0 animate-ping rounded-full bg-rose-500/20" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-rose-500/30 bg-rose-100 dark:bg-rose-950/60">
            <XCircle className="h-12 w-12 animate-bounce text-rose-600 duration-1000 dark:text-rose-400" />
          </div>
        </div>

        {/* 📝 Main Message */}
        <div className="space-y-2">
          <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-600 dark:text-rose-400">
            <AlertTriangle className="h-3.5 w-3.5" /> Transaction Cancelled
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Payment Cancelled
          </h1>
          <p className="text-base text-muted-foreground">
            Your payment process was cancelled and no charges were made to your
            account.
          </p>
        </div>

        {/* ℹ️ Info Box */}
        <Card className="border-border/60 bg-card text-center shadow-xs">
          <CardContent className="p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              If you experienced any technical issues or changed your mind, you
              can try booking again from your dashboard.
            </p>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button className="h-11 flex-1 cursor-pointer font-semibold">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Try Again</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
