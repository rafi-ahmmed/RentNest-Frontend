"use client"

import React from "react"
import Link from "next/link"
import { Home, Bell, User } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

export function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-10 flex h-16 w-full shrink-0 items-center justify-between border-b border-border bg-card/80 px-4 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <SidebarTrigger className={"block md:block lg:hidden"} />
        <div className="mx-1 block h-4 w-px bg-border md:block lg:hidden" />

        <Button
          variant="outline"
          size="sm"
          className="h-8 gap-1.5 border-border/80 text-xs font-semibold"
        >
          <Link className="flex items-center justify-center gap-1.5" href="/">
            <Home className="h-3.5 w-3.5 text-primary" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </Button>
      </div>

      {/* <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 border-l border-border pl-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
            <User className="h-4 w-4" />
          </div>
          <span className="hidden text-xs font-medium text-foreground md:inline-block">
            Rafi Ahmmed
          </span>
        </div>
      </div> */}
    </header>
  )
}