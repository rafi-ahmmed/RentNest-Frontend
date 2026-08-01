"use client"

import React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  Building2,
  PlusCircle,
  Users,
  Settings,
  LogOut,
  Building,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Logout } from "@/app/(authGroup)/_actions/authActions"
import { ISidebarItem, IUser, UserRole } from "@/lib/types"
import { sidebarMenuItems } from "../../_config/sidebarMenuItems"


export function AppSidebar({ user }: { user: IUser }) {
  const pathname = usePathname()
  const router = useRouter()

  let navItems: ISidebarItem[] = []

  if (user?.role === UserRole.USER) {
    navItems = sidebarMenuItems.TENANT
  } else if (user?.role === UserRole.LANDLORD) {
    navItems = sidebarMenuItems.LANDLORD
  } else if (user?.role === UserRole.ADMIN) {
    navItems = sidebarMenuItems.ADMIN
  }

  return (
    <Sidebar variant="sidebar" collapsible="offcanvas">
      <SidebarHeader className="flex h-16 items-center justify-center border-b border-sidebar-border px-4">
        <Link href="/" className="group flex w-full items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-xl font-bold text-primary-foreground shadow-sm">
            🏠
          </div>

          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-lg leading-tight font-bold tracking-tight text-foreground">
              Rent<span className="text-primary">Nest</span>
            </span>
            <span className="text-[10px] font-medium text-muted-foreground">
              Dashboard
            </span>
          </div>
        </Link>
      </SidebarHeader>

      {/* 📌 Navigation Links */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <SidebarMenuItem className="mt-1" key={item.label}>
                    <SidebarMenuButton isActive={isActive} tooltip={item.label}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3"
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* 🚪 Footer Logout */}
      <SidebarFooter className="border-t border-sidebar-border p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
              tooltip="Logout"
              onClick={async () => {
                await Logout()
                router.push("/login")
              }}
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
