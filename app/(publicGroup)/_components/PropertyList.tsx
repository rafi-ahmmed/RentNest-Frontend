import React from "react"
import { Property, PropertyCard } from "./PropertyCard"
import { getAllProperties } from "../_actions/getAllProperties"
import { ISearchParams } from "../properties/page"
import { PropertyEmptyState } from "./PropertyEmptyState"

export async function PropertyList({ searchParams }: ISearchParams) {
  const query = (await searchParams) ?? {}
  const properties = await getAllProperties(query)

  const propertyData: Property[] = properties?.data || []
  const totalProperties = properties?.meta?.total || 0


  if (propertyData.length === 0) {
    return (
      <div className="py-6">
        <PropertyEmptyState />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="text-md text-muted-foreground">
        Showing <strong>{totalProperties}</strong>{" "}
        {totalProperties === 1 ? "property" : "properties"}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {propertyData.map((property: Property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}
