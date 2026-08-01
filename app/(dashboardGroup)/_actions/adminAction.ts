import { cookies } from "next/headers"

export const adminAllRentalRequest = async () => {
  const cookieStored = cookies()
  const accessToken = (await cookieStored).get("accessToken")?.value

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/admin/rentals`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["admin-tenant-requests"],
    },
  })

  const result = await res.json()
  return result
}

export const adminGetAllProperties = async () => {
  const cookieStored = cookies()
  const accessToken = (await cookieStored).get("accessToken")?.value

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/properties`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 24,
        tags: ["admin-allProperties"],
      },
    }
  )

  const result = await res.json()
  return result
}

export const adminGetAllUsers = async () => {
  const cookieStored = cookies()
  const accessToken = (await cookieStored).get("accessToken")?.value

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/admin/users`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["admin-allUsers"],
    },
  })

  const result = await res.json()
  return result
}
