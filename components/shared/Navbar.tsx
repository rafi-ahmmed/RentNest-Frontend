"use client"
import Link from "next/link"
import {
  Sun,
  Home,
  Building,
  LayoutDashboard,
  User,
  LogOut,
  LogIn,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getMe } from "@/services/getme"
import { IUser, UserRole } from "@/lib/types"
import { Logout } from "@/app/(authGroup)/_actions/authActions"
import { useRouter } from "next/navigation"

// Navigation Links Array
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

// Dropdown Items Array
const dropdownItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    iconColor: "text-primary",
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
  console.log("user profile==", user)
  const router = useRouter()
  const handleUserMenuAction = async (action: string) => {
    console.log(action)

    if (action === "logout") {
      await Logout()
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
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-primary/3 backdrop-blur supports-backdrop-filter:bg-primary/2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        {/* Left: Brand / Logo Name */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-xl font-bold text-primary-foreground shadow-sm">
            🏠
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Rent<span className="text-primary">Nest</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.title}
                href={link.href}
                className="flex items-center gap-1.5 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
              >
                {link.title}
              </Link>
            )
          })}
        </nav>

        {/* Right: Theme Toggle + Login Button + User Profile Dropdown */}
        <div className="flex items-center gap-3">
          {/* Static Theme Toggle Icon Button */}
          {/* <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-muted-foreground hover:text-foreground"
          >
            <Sun className="h-5 w-5 text-amber-500" />
          </Button> */}

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div className="relative cursor-pointer rounded-full ring-2 ring-primary/20 transition-all hover:ring-primary/50">
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src={
                        user.image || "https://i.ibb.co.com/fYrk3K68/user-1.png"
                      }
                      alt="User Avatar"
                    />
                    <AvatarFallback className="bg-primary/10 font-semibold text-primary">
                      RA
                    </AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56" align="end">
                {/* User Info Header */}
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm leading-none font-medium text-foreground">
                        {user?.name || "User name"}
                      </p>
                      <p className="truncate text-xs leading-none text-muted-foreground">
                        {user?.email || "siyam@example.com"}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup className="md:hidden">
                  {navLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <DropdownMenuItem key={link.title} className="p-0">
                        <Link
                          href={link.href}
                          className="flex w-full cursor-pointer items-center gap-2 px-2 py-1.5 font-medium"
                        >
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          <span>{link.title}</span>
                        </Link>
                      </DropdownMenuItem>
                    )
                  })}
                </DropdownMenuGroup>

                {/* Main Dashboard & Profile Links */}
                <DropdownMenuGroup>
                  {dropdownItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <DropdownMenuItem
                        onClick={() => handleUserMenuAction(item.action)}
                        key={item.title}
                        className="cursor-pointer p-1.5"
                      >
                        <Icon className={`h-4 w-4 ${item.iconColor}`} />
                        <span>{item.title}</span>
                      </DropdownMenuItem>
                    )
                  })}
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                {/* Logout Option */}
                <DropdownMenuItem
                  onClick={() => handleUserMenuAction("logout")}
                  className="flex cursor-pointer items-center gap-2 text-destructive focus:text-destructive"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button className="gap-2 px-3.5 py-3.5 font-medium">
              <Link href="/login" className="flex items-center gap-2">
                Login
              </Link>
            </Button>
          )}

          {/* Login Button */}

          {/* User Profile Dropdown Menu */}
        </div>
      </div>
    </header>
  )
}

export default Navbar
