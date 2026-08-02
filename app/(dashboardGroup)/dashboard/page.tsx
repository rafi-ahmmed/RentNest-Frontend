import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RentalRequest } from "@/lib/types"
import ActivePropertyCard from "../_components/Tenant/ActivePropertyCard"
import TenantRequestsTable from "../_components/Tenant/TenantRequestsTable"
import { Building, CheckCircle2, Clock, Home } from "lucide-react"
import { getAllRentalRequest } from "../_actions/tenantActions"

interface ApiResponse {
  success: boolean
  message: string
  meta: {
    total: number
    approved: number
    pending: number
    completed: number
    active: number
  }
  data: RentalRequest[]
}

export default async function TenantRequestsPage() {
  const requests = await getAllRentalRequest()
  // console.log(requests)

  const { meta, data } = requests
  

  return (
    <div className="space-y-6">


      <div className="flex flex-col gap-1 border-b pb-5">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Rental Applications
          </h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Manage your active stay, pay for approved requests, and track
          application status.
        </p>
      </div>

      {/* 📊 Meta Overview Cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {/* Total Requests */}
        <Card className="border-border/60 bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              Total Requests
            </CardTitle>
            <Building className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {meta.total}
            </div>
          </CardContent>
        </Card>

        {/* Pending Requests */}
        <Card className="border-amber-500/20 bg-amber-500/5 dark:bg-amber-500/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold tracking-wider text-amber-600 uppercase dark:text-amber-400">
              Pending Approval
            </CardTitle>
            <Clock className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
              {meta.pending}
            </div>
          </CardContent>
        </Card>

        {/* Completed Requests */}
        <Card className="border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
              Approved
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              {meta.approved}
            </div>
          </CardContent>
        </Card>

        {/* Completed */}
        <Card className="border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-blue-400">
              Completed
            </CardTitle>
            <Home className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {meta.completed}
            </div>
          </CardContent>
        </Card>
      </div>

      <ActivePropertyCard requests={data} />
      <TenantRequestsTable requests={data} />
    </div>
  )
}
