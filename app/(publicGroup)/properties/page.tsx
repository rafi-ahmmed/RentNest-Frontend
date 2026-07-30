import React, { Suspense } from "react"
import { Card } from "@/components/ui/card"
import { MobileFilter } from "../_components/MobileFilter"
import { FilterContent } from "../_components/FilterContent"
import { PropertyList } from "../_components/PropertyList"
import { PropertyCardSkeleton } from "../_components/PropertyCardSkeleton"
import PropertySearchBar from "../_components/PropertySearchBar"
import { getAllCategories } from "../_actions/getAllCategories"

export type ISearchParams = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function PropertiesPage({ searchParams }: ISearchParams) {
  const categories = await getAllCategories()
  console.log(categories)

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
            <PropertySearchBar />

            {/* Mobile */}
            <MobileFilter categories={categories} />
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Desktop Sidebar Filter */}
          <div className="hidden lg:col-span-1 lg:block">
            <Card className="sticky top-20 border-primary/10 p-6 shadow-sm">
              <FilterContent categories={categories} />
            </Card>
          </div>

          {/* Property Grid List */}
          <div className="lg:col-span-3">
            <Suspense fallback={<PropertyCardSkeleton />}>
              <PropertyList searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
