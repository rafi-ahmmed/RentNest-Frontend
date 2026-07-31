"use client"

import Link from "next/link"
import { X, Mail, Lock, ArrowRight, CircleAlert } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SubmitHandler, useForm } from "react-hook-form"
import z from "zod"
import { loginSchema } from "@/schemas/auth.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginAction } from "../_actions/authActions"
import { useTransition } from "react"
import { toast } from "sonner"
import { useRouter, useSearchParams } from "next/navigation"

type LoginFormData = z.infer<typeof loginSchema>

export function LoginForm() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirectTo")!
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    startTransition(async () => {
      const result = await loginAction(data, redirectTo)

      if (result.success) {
        reset()
        toast.success("Login Completed")
      } else if (!result.success) {
        toast.error(result.message || "Something went wrong!")
      } else {
        toast.error("Something went wrong!")
      }
    })
  }

  return (
    <Card className="relative w-full max-w-xl border border-primary/10 bg-card/95 p-2 shadow-xl backdrop-blur-sm sm:p-4">
      <Link
        href="/"
        className="absolute top-4 right-4 rounded-full p-1.5 text-muted-foreground opacity-70 transition-all hover:bg-accent hover:text-foreground hover:opacity-100 focus:ring-2 focus:ring-primary/30 focus:outline-none"
      >
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </Link>

      <CardHeader className="space-y-1.5 pt-6 pb-4 text-center">
        <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
          Welcome back
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground sm:text-sm">
          Enter your email and password to login to your account
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div className="space-y-2 text-left">
            <Label
              htmlFor="email"
              className="text-xs font-semibold text-muted-foreground uppercase"
            >
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="h-11 border-input/80 bg-background/50 pl-9 focus-visible:ring-primary/30"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 flex items-center justify-start gap-1 text-sm text-red-500">
                  <CircleAlert size={12} />
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2 text-left">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-xs font-semibold text-muted-foreground uppercase"
              >
                Password
              </Label>
            </div>
            <div className="relative">
              <Lock className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="h-11 border-input/80 bg-background/50 pl-9 focus-visible:ring-primary/30"
                {...register("password")}
              />
              {errors.password && (
                <p className="mt-1 flex items-center justify-start gap-1 text-sm text-red-500">
                  <CircleAlert size={12} />
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isPending}
            className="group mt-4 h-10 w-full gap-2 font-semibold shadow-sm transition-all hover:shadow-md"
          >
            <span>{isPending ? "signing in" : "Log in"}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border/60" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              New here?
            </span>
          </div>
        </div>

        {/* Sign up Link */}
        <div className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
