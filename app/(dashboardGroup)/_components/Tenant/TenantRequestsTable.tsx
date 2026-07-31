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
import { RentalRequest } from "@/lib/types"
import {
  BadgeCheck,
  Calendar,
  Check,
  Clock,
  CreditCard,
  Eye,
  Mail,
  MessageSquarePlus,
  Sparkles,
  XCircle,
} from "lucide-react"
import { useState } from "react"
import DetailsModal from "./DetailsModal"
import { formatDate } from "@/lib/utils"

interface ActivePropertyCardProps {
  requests: RentalRequest[]
}

const TenantRequestsTable = ({ requests }: ActivePropertyCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRequest, setSelectedRequest] = useState<RentalRequest | null>(
    null
  )

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xs">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow className="border-b border-border hover:bg-transparent">
            <TableHead className="w-35 px-5 py-4 text-sm font-semibold">
              Request ID
            </TableHead>

            <TableHead className="px-5 py-4 text-sm font-semibold">
              Landlord Email
            </TableHead>
            <TableHead className="px-5 py-4 text-sm font-semibold">
              Requested Property
            </TableHead>
            <TableHead className="px-5 py-4 text-sm font-semibold">
              Move-in Date
            </TableHead>
            <TableHead className="px-5 py-4 text-sm font-semibold">
              Status
            </TableHead>

            <TableHead className="w-27.5 px-5 py-4 text-center text-sm font-semibold"></TableHead>

            <TableHead className="w-37.5 px-5 py-4 text-right text-sm font-semibold">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.length > 0 ? (
            requests.map((req) => (
              <TableRow
                key={req.id}
                className="border-b border-border/60 transition-colors hover:bg-muted/40"
              >
                
                <TableCell className="px-5 py-4" title={req.id}>
                  <div className="flex items-center gap-1.5 font-mono text-sm font-medium text-muted-foreground">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{req.id.slice(0, 8)}...</span>
                  </div>
                </TableCell>

               
                <TableCell className="px-5 py-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span>
                     
                      {req.properties?.landlord?.email || "N/A"}
                    </span>
                  </div>
                </TableCell>

                {/* Property Details */}
                <TableCell className="px-5 py-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-foreground">
                      {req.properties.title}
                    </span>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className="px-2 py-0.5 text-xs font-normal capitalize"
                      >
                        {req.properties.category.name}
                      </Badge>
                      <span className="text-xs font-bold text-primary">
                        ৳{Number(req.properties.rent).toLocaleString()}/mo
                      </span>
                    </div>
                  </div>
                </TableCell>

                {/* Move-in Date */}
                <TableCell className="px-5 py-4 text-sm whitespace-nowrap text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-muted-foreground/70" />
                    <span>{formatDate(req.moveInDate)}</span>
                  </div>
                </TableCell>

                {/* Status Badges */}
                <TableCell className="px-5 py-4">
                  {req.status === "PENDING" && (
                    <Badge
                      variant="outline"
                      className="gap-1 border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-600 dark:text-amber-400"
                    >
                      <Clock className="h-3 w-3" />
                      Pending
                    </Badge>
                  )}

                  {req.status === "APPROVED" && (
                    <Badge
                      variant="outline"
                      className="gap-1.5 border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-600 dark:text-blue-400"
                    >
                      <Sparkles className="h-3 w-3" />
                      Approved
                    </Badge>
                  )}

                  {req.status === "ACTIVE" && (
                    <Badge
                      variant="outline"
                      className="gap-1.5 border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"
                    >
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                      Active
                    </Badge>
                  )}

                  {req.status === "REJECTED" && (
                    <Badge
                      variant="outline"
                      className="gap-1 border-rose-500/30 bg-rose-500/10 px-2.5 py-1 text-xs font-medium text-rose-600 dark:text-rose-400"
                    >
                      <XCircle className="h-3 w-3" />
                      Rejected
                    </Badge>
                  )}

                  {req.status === "COMPLETED" && (
                    <Badge
                      variant="outline"
                      className="gap-1 border-slate-500/30 bg-slate-500/10 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-400"
                    >
                      <Check className="h-3 w-3" />
                      Completed
                    </Badge>
                  )}
                </TableCell>

                {/* Details Button */}
                <TableCell className="px-5 py-4 text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsModalOpen(true)
                      setSelectedRequest(req)
                    }}
                    className="h-8 gap-1.5 px-3 text-xs font-medium"
                  >
                    <Eye className="h-3.5 w-3.5 text-muted-foreground" />
                    Details
                  </Button>
                </TableCell>

                {/* Actions Column */}
                <TableCell className="px-5 py-4 text-right">
                  <div className="flex items-center justify-end">
                    {req.status === "APPROVED" && (
                      <Button
                        size="sm"
                        className="h-8 w-32 justify-center gap-1.5 bg-blue-600 px-3 text-xs font-medium text-white shadow-xs hover:bg-blue-700"
                        onClick={() =>
                          alert(
                            `Redirecting to payment for ${req.properties.title}`
                          )
                        }
                      >
                        <CreditCard className="h-3.5 w-3.5" />
                        Pay Now
                      </Button>
                    )}

                    {req.status === "ACTIVE" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-32 justify-center gap-1.5 border-emerald-500/30 px-3 text-xs font-medium text-emerald-600 hover:bg-emerald-50 dark:bg-emerald-950/20 dark:text-emerald-400"
                        onClick={() =>
                          alert(`Open Review Modal for ${req.properties.title}`)
                        }
                      >
                        <MessageSquarePlus className="h-3.5 w-3.5" />
                        Leave Review
                      </Button>
                    )}

                    {req.status === "COMPLETED" && (
                      <span className="inline-flex h-8 w-32 items-center justify-center gap-1.5 rounded-md border border-slate-500/30 bg-slate-500/10 px-2 text-xs font-semibold text-slate-600 select-none dark:text-slate-400">
                        <Check className="h-3.5 w-3.5" />
                        Paid
                      </span>
                    )}

                    {req.status === "PENDING" && (
                      <span className="inline-flex h-8 w-32 items-center justify-center rounded-md border border-border/40 bg-muted/60 px-2 text-[11px] font-medium text-muted-foreground/70 select-none">
                        Waiting Approval
                      </span>
                    )}

                    {req.status === "REJECTED" && (
                      <span className="inline-flex h-8 w-32 items-center justify-center rounded-md border border-border/40 bg-muted/60 px-2 text-[11px] font-medium text-muted-foreground/70 select-none">
                        N/A
                      </span>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={7}
                className="h-28 text-center text-sm text-muted-foreground"
              >
                No rental requests found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Details Modal */}
      <DetailsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        selectedRequest={selectedRequest}
      />
    </div>
  )
}

export default TenantRequestsTable
