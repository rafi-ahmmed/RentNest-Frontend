import { CreditCard, FileText, LayoutDashboard } from "lucide-react"

export const TENANT_SIDEBAR_ITEMS = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Payment History",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
]
