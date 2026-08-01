"use client"

import { useEffect } from "react"
import { paymentSuccessRevalidate } from "@/app/(dashboardGroup)/_actions/tenantActions"
import { toast } from "sonner"

export default function SuccessRevalidate() {
  useEffect(() => {
    toast.success(
      "Payment Successful! Your payment has been successfully processed through Stripe."
    )
    paymentSuccessRevalidate()
  }, [])

  return null
}
