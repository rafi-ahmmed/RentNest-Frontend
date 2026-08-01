import { Building2, CirclePlus, Plus } from "lucide-react"
import { LandlordProperty } from "@/lib/types"
import LandlordPropertyCard from "../_components/landlord/LandlordPropertyCard"
import { getLandlordProperties } from "../_actions/landlordActions"
import Link from "next/link"

const dummyProperties: LandlordProperty[] = [
  {
    id: "5231ef7a-1f70-414b-9bfc-d511b99ba5dd",
    title: "Well managed bachelor House",
    description:
      "2-bedroom 1-kitchen ready for immediate move-in with peaceful environment.",
    rent: "7500",
    size: "600 sqft",
    bedroom: 2,
    bathroom: 1,
    location: "Rangpur",
    address: "House 15, Road 7, Rangpur, BD",
    amenities: ["wifi", "parking", "security", "gas"],
    images: [],
    iaAvailable: false,
    landlordId: "0234576a-4a38-4d14-ac0d-9424344df5e9",
    categoryId: "46758ca5-6353-42c2-95c5-fb5685e95577",
    createdAt: "2026-07-08T05:38:12.588Z",
    updatedAt: "2026-07-08T10:08:29.860Z",
    category: { name: "house" },
  },
  {
    id: "6231ef7a-1f70-414b-9bfc-d511b99ba5ee",
    title: "Luxury Family Apartment",
    description:
      "Spacious family apartment with modern interior fittings and high security.",
    rent: "18500",
    size: "1200 sqft",
    bedroom: 3,
    bathroom: 2,
    location: "Dhaka",
    address: "Block B, Bashundhara R/A, Dhaka",
    amenities: ["wifi", "parking", "security", "gas"],
    images: [],
    iaAvailable: true,
    landlordId: "0234576a-4a38-4d14-ac0d-9424344df5e9",
    categoryId: "46758ca5-6353-42c2-95c5-fb5685e95577",
    createdAt: "2026-07-05T08:20:12.588Z",
    updatedAt: "2026-07-05T08:20:12.588Z",
    category: { name: "apartment" },
  },
]

export default async function LandlordOverviewPage() {
  const properties = await getLandlordProperties()

  return (
    <div className="mx-auto space-y-5 p-3 sm:p-5">
      {/* Header */}
      <div className="flex flex-col justify-between gap-3 border-b pb-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Building2 className="h-5 w-5" />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
              My Properties
            </h1>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Manage your listed rental properties and view their current
            statuses.
          </p>
        </div>

        <Link
          href="/landlord-dashboard/create-property"
          className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
        >
          
          <CirclePlus className="h-3.5 w-3.5" />
          Add Property
        </Link>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {properties.data.map((item: LandlordProperty) => (
          <LandlordPropertyCard property={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
