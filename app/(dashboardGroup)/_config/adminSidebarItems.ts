import { LayoutDashboard, Users } from "lucide-react"

export const ADMIN_SIDEBAR_ITEMS = [
  {
    label: "Overview",
    href: "/admin-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Manage Users",
    href: "/admin-dashboard/manage-users",
    icon: Users,
  },
]
