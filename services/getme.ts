"use server"

import { cookies } from "next/headers"
import Jwt from "jsonwebtoken"
import { verifyTkn } from "@/utils/jwt"

export const getMe = async () => {
  const getStored = await cookies()

  const accessToken = getStored.get("accessToken")?.value as string

  if (!accessToken) {
    return null
  }

  //   const decodedAccessToken = verifyTkn(
  //     accessToken,
  //     process.env.JWT_ACCESS_TKN_SECRET as string
  //   )

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/me`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["my-profile"],
    },
  })

  const result = await res.json()

  return result.data
}
