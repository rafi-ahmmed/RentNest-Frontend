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
import { ICategoryResponse } from "@/lib/types"

export function MobileFilter({
  categories,
}: {
  categories: ICategoryResponse
}) {
  return (
    <div className="lg:hidden">
      <Sheet>
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
          className="w-75 overflow-y-auto px-4 sm:w-90"
        >
          <SheetHeader className="mb-4 text-left">
            <SheetTitle>Filter Properties</SheetTitle>
          </SheetHeader>
          <FilterContent categories={categories} />
        </SheetContent>
      </Sheet>
    </div>
  )
}
