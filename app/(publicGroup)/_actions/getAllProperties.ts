"use server"

export const getAllProperties = async (query: {
  [key: string]: string | string[] | undefined
}) => {
  console.log("query==", query)
  const { searchTerm, location, minPrice, maxPrice, amenities, type } = query

  const params = new URLSearchParams()

  if (query && searchTerm) {
    params.set("searchTerm", searchTerm as string)
  }
  if (location) {
    console.log(location)
    params.set("location", location as string)
  }
  if (minPrice) {
    params.set("minPrice", minPrice as string)
  }
  if (maxPrice) {
    params.set("maxPrice", maxPrice as string)
  }
  if (amenities) {
    params.set("amenities", amenities as string)
  }
  if (type) {
    params.set("type", type as string)
  }

  console.log("final params=", params.toString())

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties?${params.toString()}`,
    {
      cache: "no-cache",
      next: {
        revalidate: 60 * 60 * 6,
        tags: ["all-properties"],
      },
    }
  )

  const result = await res.json()
  return result
}
