"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Home,
  Building,
  LayoutDashboard,
  User,
  LogOut,
  LogIn,
  Menu,
} from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IUser, UserRole } from "@/lib/types"
import { Logout } from "@/app/(authGroup)/_actions/authActions"
import { toast } from "sonner"
import { useState } from "react"

const navLinks = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Properties",
    href: "/properties",
    icon: Building,
  },
]

const dropdownItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    iconColor: "text-emerald-600 dark:text-emerald-400",
    action: "dashboard",
  },
  {
    title: "Profile",
    icon: User,
    iconColor: "text-muted-foreground",
    action: "profile",
  },
]

function Navbar({ user }: { user: IUser }) {
  const router = useRouter()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleUserMenuAction = async (action: string) => {
    if (action === "logout") {
      await Logout()
      toast.success("Logout Successfully!")
    }

    if (action === "dashboard") {
      if (user.role === UserRole.USER) {
        router.push("/dashboard")
      } else if (user.role === UserRole.LANDLORD) {
        router.push("/landlord-dashboard")
      } else if (user.role === UserRole.ADMIN) {
        router.push("/admin-dashboard")
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-500/10 bg-background/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-xl font-bold text-white shadow-md shadow-emerald-600/20 transition-transform group-hover:scale-105 dark:bg-emerald-500 dark:text-slate-950">
            🏠
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Rent
            <span className="text-emerald-600 dark:text-emerald-400">Nest</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1.5 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            const Icon = link.icon
            return (
              <Link
                key={link.title}
                href={link.href}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-2 transition-all ${
                  isActive
                    ? "bg-emerald-50 font-semibold text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400"
                    : "text-muted-foreground hover:bg-slate-100 hover:text-foreground dark:hover:bg-slate-900"
                }`}
              >
                <Icon
                  className={`h-4 w-4 ${isActive ? "text-emerald-600 dark:text-emerald-400" : ""}`}
                />
                {link.title}
              </Link>
            )
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div className="relative cursor-pointer rounded-full ring-2 ring-emerald-500/30 transition-all hover:ring-emerald-500">
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src={
                        user.image || "https://i.ibb.co.com/fYrk3K68/user-1.png"
                      }
                      alt="User Avatar"
                    />
                    <AvatarFallback className="bg-emerald-100 font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                      {user.name ? user.name.slice(0, 2).toUpperCase() : "RN"}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm leading-none font-semibold text-foreground capitalize">
                        {user?.name || "User name"}{" "}
                        <span className="text-xs font-normal text-muted-foreground">
                          ({user.role === "USER" ? "Tenant" : user.role})
                        </span>
                      </p>
                      <p className="truncate text-xs leading-none text-muted-foreground">
                        {user?.email || "user@example.com"}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup className={"block md:block lg:hidden"}>
                  {navLinks.map((link) => {
                    const Icon = link.icon
                    const isActive = pathname === link.href
                    return (
                      <DropdownMenuItem key={link.title}>
                        <Link
                          href={link.href}
                          className={`flex cursor-pointer items-center gap-2 py-2 text-sm font-medium ${
                            isActive
                              ? "font-semibold text-emerald-600 dark:text-emerald-400"
                              : ""
                          }`}
                        >
                          <Icon
                            className={`h-4 w-4 ${
                              isActive
                                ? "text-emerald-600 dark:text-emerald-400"
                                : "text-muted-foreground"
                            }`}
                          />
                          <span>{link.title}</span>
                        </Link>
                      </DropdownMenuItem>
                    )
                  })}
                </DropdownMenuGroup>

                {/* Dashboard & Profile Links */}
                <DropdownMenuGroup>
                  {dropdownItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <DropdownMenuItem
                        onClick={() => handleUserMenuAction(item.action)}
                        key={item.title}
                        className="cursor-pointer gap-2 py-2 text-sm font-medium"
                      >
                        <Icon className={`h-4 w-4 ${item.iconColor}`} />
                        <span>{item.title}</span>
                      </DropdownMenuItem>
                    )
                  })}
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={() => handleUserMenuAction("logout")}
                  className="cursor-pointer gap-2 py-2 font-medium text-destructive focus:text-destructive"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              {/* Desktop Login Button */}
              <div className="hidden sm:block">
                <Link
                  href="/login"
                  className={buttonVariants({
                    size: "sm",
                    className:
                      "gap-2 bg-emerald-600 font-medium text-white shadow-sm hover:bg-emerald-700 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400",
                  })}
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </Link>
              </div>

              {/* Mobile Sheet Menu Trigger (Only visible when user is NOT logged in) */}
              <div className="md:hidden">
                <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                  <SheetTrigger className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </SheetTrigger>

                  <SheetContent side="right" className="w-72">
                    <SheetHeader className="border-b pb-4 text-left">
                      <SheetTitle className="flex items-center gap-2">
                        <span className="text-lg font-bold">
                          Rent
                          <span className="text-emerald-600 dark:text-emerald-400">
                            Nest
                          </span>
                        </span>
                      </SheetTitle>
                    </SheetHeader>

                    <div className="flex flex-col gap-2 pt-6">
                      {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        const Icon = link.icon
                        return (
                          <Link
                            key={link.title}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                              isActive
                                ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400"
                                : "text-muted-foreground hover:bg-accent hover:text-foreground"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                            <span>{link.title}</span>
                          </Link>
                        )
                      })}

                      <div className="mt-4 flex flex-col gap-2 border-t pt-4">
                        <Link
                          href="/login"
                          onClick={() => setMobileOpen(false)}
                          className={buttonVariants({
                            className:
                              "w-full justify-center bg-emerald-600 text-white hover:bg-emerald-700",
                          })}
                        >
                          <LogIn className="mr-2 h-4 w-4" /> Login
                        </Link>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
