"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

import { Loader2 } from "lucide-react"
import { paymentSuccessRevalidate } from "@/app/(dashboardGroup)/_actions/tenantActions"

export default function PaymentHistoryButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handlePaymentSuccess = () => {
    startTransition(async () => {
      try {
        await paymentSuccessRevalidate()

        router.push("/dashboard/payments")
      } catch (error) {
        console.error("Revalidation failed:", error)
      }
    })
  }

  return (
    <Button
      onClick={handlePaymentSuccess}
      disabled={isPending}
      className="w-full sm:w-auto"
    >
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Updating...
        </>
      ) : (
        "View Payment History"
      )}
    </Button>
  )
}
