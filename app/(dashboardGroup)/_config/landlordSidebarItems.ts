import { GitPullRequest, LayoutDashboard, PlusCircle } from "lucide-react"

export const LANDLORD_SIDEBAR_ITEMS = [
  {
    label: "Overview",
    href: "/landlord-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Rental Requests",
    href: "/landlord-dashboard/rental-requests",
    icon: GitPullRequest,
  },
  {
    label: "Add Property",
    href: "/landlord-dashboard/create-property",
    icon: PlusCircle,
  },
]
