import React from "react"
import { Property, PropertyCard } from "./PropertyCard"
import { getAllProperties } from "../_actions/getAllProperties"

export async function PropertyList() {
  const properties = await getAllProperties()
  console.log(properties)
  return (
    <div>
      <div className="mb-4 text-xs text-muted-foreground">
        Showing <strong>{properties.length}</strong> properties
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.data.map((property: Property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}
