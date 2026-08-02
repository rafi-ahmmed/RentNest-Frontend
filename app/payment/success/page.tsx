import PaymentHistoryButton from "../_components/PaymentHistoryButton";

export default function PaymentSuccessPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-4 text-center">
      <div className="mb-4 rounded-full bg-green-100 p-4 text-green-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h1 className="mb-2 text-3xl font-bold">Payment Successful! 🎉</h1>
      <p className="mb-6 text-muted-foreground">
        Thank you for your payment. Click below to refresh your records and view
        history.
      </p>

      {/* Revalidate + Navigation Button */}
      <PaymentHistoryButton />
    </div>
  )
}
