"use server"

import { ICreatePropertyPayload } from "@/lib/types"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

export const getAllRentalRequests = async () => {
  const cookieStored = cookies()
  const accessToken = (await cookieStored).get("accessToken")?.value

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/requests`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 2,
        tags: ["landlord-requests"],
      },
    }
  )

  const result = await res.json()
  return result
}

export const getLandlordProperties = async () => {
  const cookieStored = cookies()
  const accessToken = (await cookieStored).get("accessToken")?.value

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/properties`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 24 * 5,
        tags: ["landlord-properties"],
      },
    }
  )

  const result = await res.json()
  return result
}

export const createProperty = async (propertyPayload: ICreatePropertyPayload) => {
  const cookieStored = cookies()
  const accessToken = (await cookieStored).get("accessToken")?.value

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/properties`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify(propertyPayload),
    }
  )

  const result = await res.json()
  // console.log(result)
  if (result.success && result.data) {
    revalidateTag("landlord-properties", {
      expire: 0,
    })
    revalidateTag("all-properties", {
      expire: 0,
    })
    revalidateTag("admin-allProperties", {
      expire: 0,
    })
  }
  return result
}

export const updateRequestStatus = async (payload: {
  id: string
  status: "approved" | "rejected" | "completed"
}) => {
  const cookieStored = cookies()
  const accessToken = (await cookieStored).get("accessToken")?.value
  const { id, status } = payload

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/requests/${id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify({ status }),
    }
  )

  const result = await res.json()
  if (result.success && result?.data) {
    revalidateTag("landlord-requests", {
      expire: 0,
    })
    revalidateTag("tenant-requests", {
      expire: 0,
    })
    revalidateTag("admin-tenant-requests", {
      expire: 0,
    })
    revalidateTag("all-properties", {
      expire: 0,
    })
    revalidateTag("landlord-properties", {
      expire: 0,
    })
  }
  // console.log(result)
  return result
}
