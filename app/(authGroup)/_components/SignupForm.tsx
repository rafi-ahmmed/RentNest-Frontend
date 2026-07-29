"use client"

import Link from "next/link"
import {
  X,
  User,
  Mail,
  Lock,
  ArrowRight,
  Image,
  CircleAlert,
} from "lucide-react"

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
import z from "zod"
import { signupSchema } from "@/schemas/auth.schema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from "react"
import { signupAction } from "../_actions/authActions"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

type SignupFromData = z.infer<typeof signupSchema>

export function SignupForm() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) })

  const onsubmit = (data: SignupFromData) => {
    startTransition(async () => {
      const result = await signupAction(data)

      if (result?.success) {
        reset()
        toast.success("Signup successful")
        router.push("/")
      } else if (!result.success) {
        toast.error(result?.message || "Something went wrong!")
      }
    })
  }

  return (
    <Card className="relative max-w-lg border border-primary/10 bg-card/95 p-2 shadow-xl backdrop-blur-sm sm:p-4 lg:w-lg">
      <Link
        href="/"
        className="absolute top-4 right-4 rounded-full p-1.5 text-muted-foreground opacity-70 transition-all hover:bg-accent hover:text-foreground hover:opacity-100 focus:ring-2 focus:ring-primary/30 focus:outline-none"
      >
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </Link>

      <CardHeader className="space-y-1.5 pt-3 pb-4 text-center">
        <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
          Create an account
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground sm:text-sm">
          Enter your details below to get started with RentNest
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
          {/* Full Name Field */}
          <div className="space-y-2 text-left">
            <Label
              htmlFor="name"
              className="text-xs font-semibold text-muted-foreground uppercase"
            >
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                type="text"
                placeholder="Rafi Ahmmed Siyam"
                className="h-11 border-input/80 bg-background/50 pl-9 focus-visible:ring-primary/30"
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1 flex items-center justify-start gap-1 text-sm text-red-500">
                  <CircleAlert size={12} />
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>

          {/* Role Selection Field */}
          {/* <div className="space-y-2 text-left">
            <Label
              htmlFor="role"
              className="text-xs font-semibold text-muted-foreground uppercase"
            >
              I am a
            </Label>
            <div className="relative">
              <Building2 className="pointer-events-none absolute top-3 left-3 z-10 h-4 w-4 text-muted-foreground" />
              <select
                id="role"
                defaultValue="tenant"
                className="flex h-11 w-full cursor-pointer rounded-md border border-input/80 bg-background/50 py-2 pr-3 pl-9 text-sm text-foreground ring-offset-background focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:outline-none"
              >
                <option value="tenant">Tenant (Looking for rent)</option>
                <option value="landlord">Landlord (Property Owner)</option>
              </select>
            </div>
          </div> */}

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

          {/* ImgUrl Field */}
          <div className="space-y-2 text-left">
            <Label
              htmlFor="imgUrl"
              className="text-xs font-semibold text-muted-foreground uppercase"
            >
              Image URL
            </Label>
            <div className="relative">
              {/* <image className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" /> */}
              <Image className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="imgUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="h-11 border-input/80 bg-background/50 pl-9 focus-visible:ring-primary/30"
                {...register("imageUrl")}
              />
              {errors.imageUrl && (
                <p className="mt-1 flex items-center justify-start gap-1 text-sm text-red-500">
                  <CircleAlert size={12} />
                  {errors.imageUrl.message}
                </p>
              )}
            </div>
          </div>
          {/* password Field */}
          <div className="space-y-2 text-left">
            <Label
              htmlFor="password"
              className="text-xs font-semibold text-muted-foreground uppercase"
            >
              Create a password
            </Label>
            <div className="relative">
              <Lock className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••  "
                className="h-11 border-input/80 bg-background/50 pl-9 focus-visible:ring-primary/30"
                required
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
            className="group mt-4 h-11 w-full gap-2 font-semibold shadow-sm transition-all hover:shadow-md"
            disabled={isPending}
          >
            <span>{isPending ? "Loading" : "Sign up"}</span>
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
              Already joined?
            </span>
          </div>
        </div>

        {/* Login Link */}
        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            Log in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
