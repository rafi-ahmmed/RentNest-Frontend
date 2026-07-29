"use server"

import { ILoginData } from "@/schemas/auth.schema"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

export const loginAction = async (loginPayload: ILoginData) => {
  const result = await Login(loginPayload)

  return result
}

const Login = async (loginPayload: ILoginData) => {
  const getStored = await cookies()

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginPayload),
  })

  const result = await res.json()

  if (result.success && result.data) {
    getStored.set("accessToken", result.data.accessToken, {
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    })
    getStored.set("refreshToken", result.data.accessToken, {
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
    })
  }
  return result
}

export const Logout = async () => {
  const getStored = await cookies()

  getStored.delete("accessToken")
  getStored.delete("refreshToken")
  revalidateTag("my-profile", "max")
}
