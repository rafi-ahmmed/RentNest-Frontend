import { Building2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import PropertyForm from "../../_components/landlord/CreatePropertyForm"
import { getAllCategories } from "@/app/(publicGroup)/_actions/getAllCategories"

export default async function CreatePropertyPage() {
  const categories = await getAllCategories()
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center gap-3 border-b pb-4">
        <Link
          href="/landlord-dashboard"
          className={buttonVariants({ variant: "outline", size: "icon" })}
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <h1 className="flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl">
            <Building2 className="h-5 w-5 text-primary" /> Create New Property
          </h1>
          <p className="text-xs text-muted-foreground">
            Fill in the details below to list your property.
          </p>
        </div>
      </div>

     
      <PropertyForm categories={categories.data} />
    </div>
  )
}
