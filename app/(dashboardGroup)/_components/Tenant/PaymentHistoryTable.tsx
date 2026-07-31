"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PaymentRecord } from "@/lib/types"
import { BadgeCheck, Calendar, CheckCircle2, Eye, Mail } from "lucide-react"
import { useState } from "react"
import PaymentInvoiceModal from "./PaymentInvoiceModal"

interface PaymentHistoryProps {
  payments: PaymentRecord[]
}

const PaymentHistoryTable = ({ payments }: PaymentHistoryProps) => {
  const [open, setOpen] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState({})

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xs">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow className="border-b border-border hover:bg-transparent">
            <TableHead className="w-36 px-5 py-4 text-sm font-semibold">
              Txn ID
            </TableHead>
            <TableHead className="px-5 py-4 text-sm font-semibold">
              Landlord Email
            </TableHead>
            <TableHead className="px-5 py-4 text-sm font-semibold">
              Property & Address
            </TableHead>
            <TableHead className="px-5 py-4 text-sm font-semibold">
              Paid Date
            </TableHead>
            <TableHead className="px-5 py-4 text-sm font-semibold">
              Amount
            </TableHead>
            <TableHead className="px-5 py-4 text-sm font-semibold">
              Status
            </TableHead>
            <TableHead className="w-28 px-5 py-4 text-right text-sm font-semibold">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment: PaymentRecord) => {
            const paidAmount = Number(payment.amount) / 100

            return (
              <TableRow
                key={payment.id}
                className="border-b border-border/60 transition-colors hover:bg-muted/40"
              >
                {/* Transaction ID */}
                <TableCell className="px-5 py-4" title={payment.transactionId}>
                  <div className="flex items-center gap-1.5 font-mono text-xs font-medium text-muted-foreground">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{payment.transactionId.slice(0, 10)}...</span>
                  </div>
                </TableCell>

                {/* Landlord Email */}
                <TableCell className="px-5 py-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span>
                      {payment.rentalRequest.properties.landlord.email}
                    </span>
                  </div>
                </TableCell>

                {/* Property Info */}
                <TableCell className="px-5 py-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-foreground">
                      {payment.rentalRequest.properties.title}
                    </span>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className="w-fit px-2 py-0.5 text-xs font-normal capitalize"
                      >
                        {payment.rentalRequest.properties.category.name}
                      </Badge>
                      <span className="max-w-45 truncate text-xs text-muted-foreground">
                        {payment.rentalRequest.properties.address}
                      </span>
                    </div>
                  </div>
                </TableCell>

                {/* Payment Date */}
                <TableCell className="px-5 py-4 text-sm whitespace-nowrap text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-muted-foreground/70" />
                    <span>
                      {new Date(payment.paidAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </TableCell>

                {/* Amount Paid */}
                <TableCell className="px-5 py-4">
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    ৳{paidAmount.toLocaleString()}
                  </span>
                </TableCell>

                {/* Status */}
                <TableCell className="px-5 py-4">
                  <Badge
                    variant="outline"
                    className="gap-1 border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 capitalize dark:text-emerald-400"
                  >
                    <CheckCircle2 className="h-3 w-3" />
                    {payment.status.toLowerCase()}
                  </Badge>
                </TableCell>

                {/* Actions */}
                <TableCell className="px-5 py-4 text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedPayment(payment)
                      setOpen(true)
                    }}
                    className="h-8 gap-1.5 px-3 text-xs font-medium"
                  >
                    <Eye className="h-3.5 w-3.5 text-muted-foreground" />
                    Invoice
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      <PaymentInvoiceModal
        open={open}
        onOpenChange={setOpen}
        payment={selectedPayment}
      />
    </div>
  )
}

export default PaymentHistoryTable
