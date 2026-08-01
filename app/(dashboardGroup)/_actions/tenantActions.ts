"use server"

import { RentalRequestPayload } from "@/lib/types"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function paymentSuccessRevalidate() {
  revalidateTag("tenant-requests", {
    expire: 0,
  })
  revalidateTag("all-properties", {
    expire: 0,
  })
  revalidateTag("tenant-payments", {
    expire: 0,
  })
  revalidateTag("admin-tenant-requests", {
    expire: 0,
  })
  revalidateTag("admin-allProperties", {
    expire: 0,
  })
  revalidateTag("admin-allUsers", {
    expire: 0,
  })
  revalidateTag("landlord-properties", {
    expire: 0,
  })
  revalidateTag("landlord-requests", {
    expire: 0,
  })
}

export const createPayment = async (requestId: string) => {
  const cookieStored = cookies()
  const accessToken = (await cookieStored).get("accessToken")?.value

  if (!accessToken) {
    return {
      success: false,
      message: "User not login!",
    }
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/payments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify({ requestId }),
  })

  const result = await res.json()
  console.log(result)
  if (result.success && result?.data?.checkOutUrl) {
    redirect(result.data.checkOutUrl)
  }
  return result
}

export const getAllRentalRequest = async () => {
  const cookieStored = cookies()
  const accessToken = (await cookieStored).get("accessToken")?.value

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/rentals`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24 * 15,
      tags: ["tenant-requests"],
    },
  })

  const result = await res.json()
  return result
}

export const getPaymentHistory = async () => {
  const cookieStored = cookies()
  const accessToken = (await cookieStored).get("accessToken")?.value

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/payments`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24 * 15,
      tags: ["tenant-payments"],
    },
  })

  const result = await res.json()
  return result
}

export const createRentalReq = async (payload: RentalRequestPayload) => {
  const cookieStored = cookies()
  const accessToken = (await cookieStored).get("accessToken")?.value

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/rentals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  })

  const result = await res.json()

  if (result.success && result.data) {
    revalidateTag("tenant-requests", {
      expire: 0,
    })
  }
  return result
}
