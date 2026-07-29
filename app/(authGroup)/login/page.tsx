import React from "react"
import Link from "next/link"
import { LoginForm } from "../_components/LoginForm"

const LoginPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-primary/[0.02] p-4">
      {/* Centered Brand Header */}
      <div className="mb-6 flex flex-col items-center text-center">
        <Link href="/" className="group mb-2 flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground shadow-md transition-transform group-hover:scale-105">
            🏠
          </div>
        </Link>
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
          Rent<span className="text-primary">Nest</span> 
        </h1>
        
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md">
        <LoginForm />
      </div>

      {/* Subtle Footer Links */}
      <div className="mt-8 flex gap-6 text-xs text-muted-foreground">
        <Link href="#" className="hover:underline">
          Privacy Policy
        </Link>
        <span>•</span>
        <Link href="#" className="hover:underline">
          Terms of Service
        </Link>
        <span>•</span>
        <Link href="#" className="hover:underline">
          Contact Support
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
