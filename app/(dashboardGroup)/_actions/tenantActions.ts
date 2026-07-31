"use server"

import { cookies } from "next/headers"

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
