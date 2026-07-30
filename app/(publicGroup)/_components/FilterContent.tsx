"use client"

import React, { useState } from "react"
import { Filter, RotateCcw, MapPin, Building2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ICategory, ICategoryResponse } from "@/lib/types"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const AMENITIES_LIST = [
  "Parking",
  "Generator",
  "Security",
  "Elevator",
  "Garden",
  "Balcony",
  "Wifi",
]

export function FilterContent({
  categories,
}: {
  categories: ICategoryResponse
}) {
  const [priceRange, setPriceRange] = useState<number[]>([100000])
  const pathname = usePathname()
  const router = useRouter()
  const params = new URLSearchParams()
  const searchParams = useSearchParams()
  const [type, setType] = useState(searchParams.get("type") ?? "Select a type")

  const handlePropertyCategory = (value: string) => {
    if (value !== "none") {
      params.set("type", value)
    } else {
      params.delete("type")
    }
    router.push(`${pathname}?${params.toString()}`)
  }
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 pb-2">
        <div className="flex items-center gap-2 font-bold text-foreground">
          <Filter className="h-4 w-4 text-primary" />
          <span>Filter Options</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-auto gap-1 p-0 text-xs text-muted-foreground hover:text-primary"
        >
          <RotateCcw className="h-3 w-3" />
          <span>Reset</span>
        </Button>
      </div>

      {/* Property category */}
      <div className="space-y-2">
        <Label className="text-xs font-semibold text-muted-foreground uppercase">
          Filter by category
        </Label>
        <Select
          onValueChange={(value) => {
            handlePropertyCategory(value as string)
            setType(value as string)
          }}
          value={type}
        >
          <SelectTrigger className="w-full">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Select Type" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Selected none</SelectItem>
            {categories?.data.map((category: ICategory) => (
              <SelectItem
                className={"capitalize"}
                key={category.id}
                value={category.name}
              >
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range Slider */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-xs font-semibold text-muted-foreground uppercase">
            Max Price
          </Label>
          <span className="text-xs font-bold text-primary">
            ৳{(priceRange?.[0] ?? 100000).toLocaleString()} / mo
          </span>
        </div>
        <Slider
          value={priceRange}

          min={10000}
          max={150000}
          step={5000}
          className="cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-muted-foreground">
          <span>৳10,000</span>
          <span>৳150,000+</span>
        </div>
      </div>

      {/* Amenities */}
      <div className="space-y-3">
        <Label className="text-xs font-semibold text-muted-foreground uppercase">
          Amenities
        </Label>
        <div className="space-y-2">
          {AMENITIES_LIST.map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2 text-sm">
              <Checkbox id={`amenity-${amenity}`} />
              <label
                htmlFor={`amenity-${amenity}`}
                className="cursor-pointer text-sm leading-none font-medium text-foreground/80"
              >
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
