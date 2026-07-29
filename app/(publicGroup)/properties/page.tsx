import React, { Suspense } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { MobileFilter } from "../_components/MobileFilter"
import { FilterContent } from "../_components/FilterContent"
import { PropertyList } from "../_components/PropertyList"
import { getAllProperties } from "../_actions/getAllProperties"
import { PropertyCardSkeleton } from "../_components/PropertyCardSkeleton"

export default async function PropertiesPage() {
  //   const properties = await getAllProperties()
  //   console.log(properties)

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
              Explore Properties
            </h1>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Find your dream space from our verified listings
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="absolute top-2.5 left-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search location or title..."
                className="h-10 pl-9"
              />
            </div>

            {/* Mobile / Tablet Filter Button */}
            <MobileFilter />
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Desktop Sidebar Filter */}
          <div className="hidden lg:col-span-1 lg:block">
            <Card className="sticky top-20 border-primary/10 p-6 shadow-sm">
              <FilterContent />
            </Card>
          </div>

          {/* Property Grid List */}
          <div className="lg:col-span-3">
            <Suspense fallback={<PropertyCardSkeleton />}>
              <PropertyList />
            </Suspense>

            {/* <PropertyCardSkeleton/> */}
          </div>
        </div>
      </div>
    </div>
  )
}
