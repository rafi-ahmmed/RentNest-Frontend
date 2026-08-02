import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Building2,
  GitPullRequest,
  Clock,
  ShieldCheck,
  CheckCheck,
  ArrowRight,
  UserCog,
} from "lucide-react"
import {
  adminAllRentalRequest,
  adminGetAllProperties,
  adminGetAllUsers,
} from "../_actions/adminActions"

export default async function AdminDashboardPage() {
  const [users, properties, requests] = await Promise.all([
    adminGetAllUsers(),
    adminGetAllProperties(),
    adminAllRentalRequest(),
  ])

  const { meta: usermeta } = users
  const { meta: propertymeta } = properties
  const { meta: requestmeta } = requests
  // console.log(requestmeta)

  return (
    <div className="space-y-8 p-1 sm:p-4">
      {/* 📌 Page Header & Action Link */}
      <div className="flex flex-col gap-4 border-b pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Admin Overview
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Monitor overall platform activity, user management, and property
            statistics.
          </p>
        </div>

        <Button className="h-10 cursor-pointer gap-2 font-semibold shadow-xs">
          <Link
            href="/admin-dashboard/manage-users"
            className="inline-flex items-center gap-2"
          >
            <UserCog className="h-4 w-4" />
            <span>Manage Users</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="space-y-3">
        <h2 className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
          Platform Directory
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* All Users Card */}
          <Card className="border-border/60 bg-card shadow-xs transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Registered Users
              </CardTitle>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Users className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {usermeta?.total.toLocaleString() || "N/A"}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Landlords, Tenants & Administrators
              </p>
            </CardContent>
          </Card>

          {/* All Properties Card */}
          <Card className="border-border/60 bg-card shadow-xs transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Listed Properties
              </CardTitle>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Building2 className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {propertymeta.total.toLocaleString() || "N/A"}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Active & booked housing units
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
          Rental Requests & Status Breakdown
        </h2>

        {/* Total Requests Full Banner */}
        <Card className="border-border/60 bg-muted/20 shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Rental Requests Submitted
            </CardTitle>
            <GitPullRequest className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-foreground">
              {requestmeta.total.toLocaleString() || "N/A"}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Cumulative requests from all tenants across properties
            </p>
          </CardContent>
        </Card>

        {/* Status Grid */}
        <div className="grid gap-4 pt-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Pending */}
          <Card className="border-l-4 border-border/60 border-l-amber-500 bg-card shadow-xs">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-semibold text-muted-foreground uppercase">
                Pending
              </CardTitle>
              <Clock className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {requestmeta.pending || "0"}
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Awaiting landlord decision
              </p>
            </CardContent>
          </Card>

          {/* Active */}
          <Card className="border-l-4 border-border/60 border-l-emerald-500 bg-card shadow-xs">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-semibold text-muted-foreground uppercase">
                Active
              </CardTitle>
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {requestmeta.active || "0"}
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Paid & ongoing tenancies
              </p>
            </CardContent>
          </Card>

          {/* Completed */}
          <Card className="border-l-4 border-border/60 border-l-violet-500 bg-card shadow-xs">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-semibold text-muted-foreground uppercase">
                Completed
              </CardTitle>
              <CheckCheck className="h-4 w-4 text-violet-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {requestmeta.completed || "0"}
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Lease finished / Closed
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
