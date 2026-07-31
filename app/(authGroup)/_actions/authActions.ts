"use server"

import { UserRole } from "@/lib/types"
import { ILoginData, ISignupData } from "@/schemas/auth.schema"
import { verifyTkn } from "@/utils/jwt"
import { JwtPayload } from "jsonwebtoken"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const signupAction = async (signupPayload: ISignupData) => {
  console.log(signupPayload)

  const payload = {
    name: signupPayload.name,
    email: signupPayload.email,
    password: signupPayload.password,
    image: signupPayload.imageUrl,
  }

  console.log(payload)

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  const result = await res.json()
  console.log("SignUp---", result)

  if (result?.success && result?.data) {
    const loginRes = await Login(payload?.email, payload?.password)
    //  console.log(loginRes)
  }

  return result
}

export const loginAction = async (
  loginPayload: ILoginData,
  redirectTo?: string
) => {
  const result = await Login(loginPayload?.email, loginPayload?.password)

  const decodedData = verifyTkn(
    result.data.accessToken,
    process.env.JWT_ACCESS_TKN_SECRET as string
  )

  if (
    redirectTo &&
    typeof redirectTo === "string" &&
    redirectTo.startsWith("/") &&
    !redirectTo.startsWith("//")
  ) {
    redirect(redirectTo)
  }

  if ((decodedData.data as JwtPayload).role === UserRole.USER) {
    redirect("/dashboard", "replace")
  } else if ((decodedData.data as JwtPayload).role === UserRole.LANDLORD) {
    redirect("/landlord-dashboard", "replace")
  } else if ((decodedData.data as JwtPayload).role === UserRole.ADMIN) {
    redirect("/admin-dashboard", "replace")
  }

  return result
}

const Login = async (email: string, password: string) => {
  const getStored = await cookies()

  const payload = {
    email,
    password,
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
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
