import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, Home, Receipt, Sparkles } from "lucide-react"
import SuccessRevalidate from "../_components/SuccessRevalidate"
import BackButton from "../_components/BackButton"

export default async function PaymentSuccessPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-12">
      <SuccessRevalidate />
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500/20" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/60">
            <CheckCircle2 className="h-12 w-12 animate-bounce text-emerald-600 duration-1000 dark:text-emerald-400" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Secured by Stripe
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Payment Successful!
          </h1>
          <p className="text-base text-muted-foreground">
            Your payment has been successfully processed through Stripe. Thank
            you for your transaction!
          </p>
        </div>

        <Card className="border-border/60 bg-card text-center shadow-xs">
          <CardContent className="p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your transaction is complete and securely recorded. You can now
              view your payment history or return to your dashboard.
            </p>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <BackButton path="/dashboard/payments" btnContent="Payment History" />
        </div>
      </div>
    </div>
  )
}
