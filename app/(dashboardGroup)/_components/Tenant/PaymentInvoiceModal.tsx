import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { IPaymentRecord } from "@/lib/types"

import { formatDate } from "@/lib/utils"
import { Calendar, CheckCircle2, MapPin, Receipt, User } from "lucide-react"

const PaymentInvoiceModal = ({
  open,
  onOpenChange,
  payment,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  payment: IPaymentRecord | null
}) => {
  if (!payment) return null
  // console.log(payment)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-8">
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2 text-xl font-bold">
              <Receipt className="h-5 w-5 text-primary" />
              Payment Invoice
            </DialogTitle>
            <Badge
              variant="outline"
              className="gap-1 border-emerald-500/30 bg-emerald-500/10 text-emerald-600 capitalize dark:text-emerald-400"
            >
              <CheckCircle2 className="h-3 w-3" /> {payment?.status}
            </Badge>
          </div>
          <DialogDescription className="pt-1 font-mono text-xs break-all">
            Txn: {payment?.transactionId}
          </DialogDescription>
        </DialogHeader>

        {/* Invoice Body */}
        <div className="space-y-4 py-2">
          {/* Property Info */}
          <div className="space-y-1 rounded-lg bg-muted/40 p-3.5">
            <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              Property Details
            </p>
            <p className="text-sm font-semibold text-foreground">
              {payment?.rentalRequest?.properties.title}
            </p>
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3 shrink-0 text-muted-foreground" />
              {payment?.rentalRequest?.properties.address}
            </p>
          </div>

          {/* Landlord & Payment Date */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="space-y-1">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <User className="h-3 w-3" /> Landlord Email
              </span>
              <p className="text-xs font-medium break-all">
                {payment?.rentalRequest?.properties?.landlord.email}
              </p>
            </div>
            <div className="space-y-1">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" /> Paid Date
              </span>
              <p className="text-xs font-medium">
                {formatDate(payment?.paidAt)}
              </p>
            </div>
          </div>

          {/* Payment Method Breakdown */}
          <div className="grid grid-cols-2 gap-3 border-t pt-3 text-sm">
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">Provider</span>
              <p className="text-xs font-medium capitalize">
                {payment.provider} ({payment?.method})
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">Category</span>
              <p className="text-xs font-medium capitalize">
                {payment.rentalRequest?.properties.category.name}
              </p>
            </div>
          </div>

          {/* Financial Breakdown */}
          <div className="space-y-2 border-t pt-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Rent Price</span>
              <span className="font-medium">
                ৳ ৳{Number(payment?.amount) / 100}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Processing Fee</span>
              <span className="font-medium">৳0.00</span>
            </div>
            <div className="flex items-center justify-between border-t pt-2 text-base font-bold">
              <span>Total Paid</span>
              <span className="text-emerald-600 dark:text-emerald-400">
                ৳{Number(payment?.amount) / 100}
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PaymentInvoiceModal
