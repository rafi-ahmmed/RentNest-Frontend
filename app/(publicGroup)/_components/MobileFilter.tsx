"use client"

import React from "react"
import { Filter } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FilterContent } from "./FilterContent"


export function MobileFilter() {
  return (
    <div className="lg:hidden">
      <Sheet>
        {/* asChild বা extra <Button> না দিয়ে সরাসরি SheetTrigger-এ ক্লাস দিন */}
        <SheetTrigger
          className={buttonVariants({
            variant: "outline",
            className: "flex cursor-pointer items-center gap-2",
          })}
        >
          <Filter className="h-4 w-4 text-primary" />
          <span>Filters</span>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] overflow-y-auto sm:w-[360px] px-4"
        >
          <SheetHeader className="mb-4 text-left">
            <SheetTitle>Filter Properties</SheetTitle>
          </SheetHeader>
          <FilterContent />
        </SheetContent>
      </Sheet>
    </div>
  )
}
