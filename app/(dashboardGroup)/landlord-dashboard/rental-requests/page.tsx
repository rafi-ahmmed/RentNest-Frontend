import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Home,
  Clock,
  CheckCircle2,
  CheckSquare,
  User,
  Mail,
  Building2,
} from "lucide-react"

import { getAllRentalRequests } from "../../_actions/landlordActions"
import RequestActionButtons from "../../_components/landlord/RequestActionButtons"

export interface Tenant {
  id: string
  email: string
}

export interface Landlord {
  id: string
  email: string
}

export interface RentalRequest {
  id: string
  status: "PENDING" | "APPROVED" | "ACTIVE" | "COMPLETED" | "REJECTED"
  tenant: Tenant
}

export interface Category {
  name: string
}

export interface PropertyItem {
  id: string
  title: string
  iaAvailable: boolean
  landlord: Landlord
  category: Category
  rentalRequests: RentalRequest[]
}

export interface ApiResponse {
  success: boolean
  message: string
  meta: {
    total: number
    pending: number
    active: number
    completed: number
  }
  data: PropertyItem[]
}

function getStatusBadge(status: RentalRequest["status"]) {
  switch (status) {
    case "PENDING":
      return (
        <Badge
          variant="outline"
          className="border-yellow-200 bg-yellow-500/10 text-yellow-600"
        >
          PENDING
        </Badge>
      )
    case "APPROVED":
      return (
        <Badge
          variant="outline"
          className="border-purple-200 bg-purple-500/10 text-purple-600"
        >
          APPROVED
        </Badge>
      )
    case "ACTIVE":
      return (
        <Badge
          variant="outline"
          className="border-emerald-200 bg-emerald-500/10 text-emerald-600"
        >
          ACTIVE
        </Badge>
      )
    case "COMPLETED":
      return (
        <Badge
          variant="outline"
          className="border-blue-200 bg-blue-500/10 text-blue-600"
        >
          COMPLETED
        </Badge>
      )
    case "REJECTED":
      return (
        <Badge
          variant="outline"
          className="border-red-200 bg-red-500/10 text-red-600"
        >
          REJECTED
        </Badge>
      )
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

export default async function RentalRequestsPage() {
  const response: ApiResponse = await getAllRentalRequests()

  const meta = response?.meta || {
    total: 0,
    pending: 0,
    active: 0,
    completed: 0,
  }
  const properties = response?.data || []

  const propertiesWithRequests = properties.filter(
    (item) => item.rentalRequests && item.rentalRequests.length > 0
  )

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-4">
     
      <div className="flex flex-col gap-1 border-b pb-4">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-primary/10 p-2 text-primary">
            <Building2 className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Rental Requests Management
            </h1>
            <p className="text-sm text-muted-foreground">
              Review and manage incoming tenancy applications for your listed
              properties.
            </p>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card className="bg-slate-50/50 dark:bg-slate-900/40">
          <CardContent className="flex items-center gap-3 p-4">
            <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
              <Home className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Total Requests
              </p>
              <h3 className="text-xl font-bold">{meta.total}</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-50/50 dark:bg-slate-900/40">
          <CardContent className="flex items-center gap-3 p-4">
            <div className="rounded-lg bg-yellow-500/10 p-2.5 text-yellow-600">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Pending
              </p>
              <h3 className="text-xl font-bold">{meta.pending}</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-50/50 dark:bg-slate-900/40">
          <CardContent className="flex items-center gap-3 p-4">
            <div className="rounded-lg bg-emerald-500/10 p-2.5 text-emerald-600">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Active
              </p>
              <h3 className="text-xl font-bold">{meta.active}</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-50/50 dark:bg-slate-900/40">
          <CardContent className="flex items-center gap-3 p-4">
            <div className="rounded-lg bg-blue-500/10 p-2.5 text-blue-600">
              <CheckSquare className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Completed
              </p>
              <h3 className="text-xl font-bold">{meta.completed}</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Property Rental Requests</h2>

        {propertiesWithRequests.length === 0 ? (
          <div className="rounded-xl border border-dashed p-8 text-center text-sm text-muted-foreground">
            No active rental requests found.
          </div>
        ) : (
          propertiesWithRequests.map((property) => (
            <Card key={property.id} className="overflow-hidden">
              {/* Property Info Header */}
              <CardHeader className="border-b bg-slate-50/80 p-4 dark:bg-slate-900/60">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="space-y-1">
                    <CardTitle className="text-base font-semibold">
                      {property.title}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground capitalize">
                      Category:{" "}
                      <span className="font-medium text-foreground">
                        {property.category.name}
                      </span>
                      <span className="mx-2">•</span>
                      Landlord:{" "}
                      <span className="font-medium text-foreground">
                        {property.landlord.email}
                      </span>
                    </p>
                  </div>
                  <div>
                    <Badge
                      variant={property.iaAvailable ? "default" : "secondary"}
                    >
                      {property.iaAvailable ? "Available" : "Occupied"}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

             
              <CardContent className="space-y-3 p-4">
                <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Requests ({property.rentalRequests.length})
                </p>

                <div className="divide-y rounded-lg border">
                  {property.rentalRequests.map((req) => (
                    <div
                      key={req.id}
                      className="flex flex-col gap-3 bg-background p-3.5 sm:flex-row sm:items-center sm:justify-between"
                    >
                      {/* Tenant Details */}
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-secondary p-2 text-muted-foreground">
                          <User className="h-4 w-4" />
                        </div>
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold">
                              {req.tenant.email}
                            </span>
                            {getStatusBadge(req.status)}
                          </div>
                          <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
                            <Mail className="h-3 w-3" /> Tenant ID:{" "}
                            {req.tenant.id.slice(0, 8)}...
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <RequestActionButtons
                        propertyId={property.id}
                        requestId={req.id}
                        status={req.status}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
