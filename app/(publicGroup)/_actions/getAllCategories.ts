"use server"

export const getAllCategories = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24 * 3,
      tags: ["property-categories"],
    },
  })
  const result = await res.json()
  return result
}
