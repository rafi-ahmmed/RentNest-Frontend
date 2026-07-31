import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { RentalRequest } from "@/lib/types"
import { Building,MessageSquare, User } from "lucide-react"
import React from "react"
type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedRequest: RentalRequest | null
}
const DetailsModal = ({ open, onOpenChange, selectedRequest }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg">Rental Request Details</DialogTitle>
          <DialogDescription className="text-xs">
            Full summary of request {selectedRequest?.id}
          </DialogDescription>
        </DialogHeader>

        {selectedRequest && (
          <div className="space-y-4 pt-2 text-xs">
            <div className="space-y-2 rounded-lg border border-border/50 bg-muted/50 p-3">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <User className="h-4 w-4 text-primary" />
                <span>Tenant Info</span>
              </div>
              <div className="pl-6 text-muted-foreground">
                <p>
                  Email:{" "}
                  <strong className="text-foreground">
                    {selectedRequest.tenant.email}
                  </strong>
                </p>
                <p className="mt-0.5">
                  Move-in Date: {selectedRequest.moveInDate}
                </p>
              </div>
            </div>

            <div className="space-y-2 rounded-lg border border-border/50 bg-muted/50 p-3">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <Building className="h-4 w-4 text-primary" />
                <span>Property Info</span>
              </div>
              <div className="space-y-1 pl-6 text-muted-foreground">
                <p>
                  Title:{" "}
                  <strong className="text-foreground">
                    {selectedRequest.properties.title}
                  </strong>
                </p>
                <p>
                  Category:{" "}
                  <span className="capitalize">
                    {selectedRequest.properties.category.name}
                  </span>
                </p>
                <p>
                  Monthly Rent:{" "}
                  <strong className="text-primary">
                    ৳{Number(selectedRequest.properties.rent).toLocaleString()}
                  </strong>
                </p>
                <p>Landlord: {selectedRequest.properties.landlord.email}</p>
              </div>
            </div>

            <div className="space-y-1 rounded-lg border border-border/50 bg-muted/50 p-3">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span>Request Message</span>
              </div>
              <p className="pl-6 text-muted-foreground italic">
                {selectedRequest.message}
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default DetailsModal
