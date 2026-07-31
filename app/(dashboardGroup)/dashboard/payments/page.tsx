import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { CheckCircle2, CreditCard, DollarSign, Receipt } from "lucide-react"
import PaymentHistoryTable from "../../_components/Tenant/PaymentHistoryTable"
import { getPaymentHistory } from "../../_actions/tenantActions"

const PaymentHistory = async () => {
  const paymentData = await getPaymentHistory()
  const { meta, data } = paymentData

  const totalPaidAmount = data.reduce(
    (sum, item) => sum + Number(item.amount) / 100,
    0
  )

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-border/60 bg-card shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Spending
            </CardTitle>
            <DollarSign className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              ৳{totalPaidAmount.toLocaleString()}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Total successful rent transactions
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Transactions
            </CardTitle>
            <Receipt className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {meta?.total || "N/A"}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Successful payments completed
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Payment Gateway
            </CardTitle>
            <CreditCard className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-foreground">
              Stripe (Card)
            </div>
            <p className="mt-1 flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3 w-3" /> Fully Verified
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 💳 Payment History Table */}
      <PaymentHistoryTable payments={data} />
    </div>
  )
}

export default PaymentHistory
