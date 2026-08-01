"use client"

import React, { useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Check, X, CheckCheck, Loader2 } from "lucide-react"
import { updateRequestStatus } from "../../_actions/landlordActions"
import { toast } from "sonner"

interface RequestActionButtonsProps {
  propertyId: string
  requestId: string
  status: "PENDING" | "APPROVED" | "ACTIVE" | "COMPLETED" | "REJECTED"
}

export default function RequestActionButtons({
  propertyId,
  requestId,
  status,
}: RequestActionButtonsProps) {
  const [isPending, startTransition] = useTransition()

  const handleAction = (newStatus: "approved" | "rejected" | "completed") => {
    startTransition(async () => {
      const result = await updateRequestStatus({
        id: requestId,
        status: newStatus,
      })
      if (result.success) {
        toast.success(result.message || "status updated successfully!")
      } else {
        toast.error(result.message || "Failed to update status!")
      }
    })
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Approve Button */}
      <Button
        size="sm"
        variant="outline"
        disabled={status !== "PENDING" || isPending}
        onClick={() => handleAction("approved")}
        className="h-8 gap-1 border-emerald-500/30 text-xs font-medium text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/30"
      >
        {isPending ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <Check className="h-3.5 w-3.5" />
        )}
        Approve
      </Button>

      {/* Reject Button */}
      <Button
        size="sm"
        variant="outline"
        disabled={status !== "PENDING" || isPending}
        onClick={() => handleAction("rejected")}
        className="h-8 gap-1 border-red-500/30 text-xs font-medium text-red-600 hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-950/30"
      >
        {isPending ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <X className="h-3.5 w-3.5" />
        )}
        Reject
      </Button>

      {/* Complete Button */}
      <Button
        size="sm"
        variant="outline"
        disabled={status !== "ACTIVE" || isPending}
        onClick={() => handleAction("completed")}
        className="h-8 gap-1 border-blue-500/30 text-xs font-medium text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-950/30"
      >
        {isPending ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <CheckCheck className="h-3.5 w-3.5" />
        )}
        Complete
      </Button>
    </div>
  )
}
