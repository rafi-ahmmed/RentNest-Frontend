"use server"

import { ILoginData, ISignupData } from "@/schemas/auth.schema"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

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

export const loginAction = async (loginPayload: ILoginData) => {
  const result = await Login(loginPayload?.email, loginPayload?.password)

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
