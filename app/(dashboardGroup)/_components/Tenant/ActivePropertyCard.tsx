"use client"

import React from "react"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RentalRequest } from "@/lib/types"

interface ActivePropertyCardProps {
  requests: RentalRequest[]
}

const ActivePropertyCard = ({ requests }: ActivePropertyCardProps) => {
  const activeRequests = requests.filter(
    (r: RentalRequest) => r.status === "ACTIVE"
  )

  if (!activeRequests || activeRequests.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      {activeRequests.map((activeProperty) => (
        <Card
          key={activeProperty.id}
          className="border-blue-500/30 bg-linear-to-r from-blue-500/10 via-background to-background p-5 shadow-xs"
        >
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Badge className="gap-1.5 bg-blue-600 text-xs text-white hover:bg-blue-600">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                  Currently Living Here (Active)
                </Badge>
                <span className="text-xs font-medium text-muted-foreground capitalize">
                  • {activeProperty.properties.category.name}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {activeProperty.properties.title}
              </h3>
              <p className="text-sm font-semibold text-primary">
                Monthly Rent: ৳
                {Number(activeProperty.properties.rent).toLocaleString()}
              </p>
            </div>

            <Button
              variant="destructive"
              size="lg"
              className="w-full gap-2 text-sm font-semibold shadow-md sm:w-auto"
              onClick={() => {
                if (
                  confirm(
                    `Are you sure you want to end your stay at "${activeProperty.properties.title}"?`
                  )
                ) {
                  alert("Request sent to landlord to end lease.")
                }
              }}
            >
              <LogOut className="h-4 w-4" />
              End Lease
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default ActivePropertyCard
