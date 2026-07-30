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
import { Input } from "@/components/ui/input"
import { useDebouncedCallback } from "use-debounce"

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
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const [type, setType] = useState(searchParams.get("type") ?? "Select a type")
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(() => {
    const amenities = searchParams.get("amenities")
    return amenities ? amenities.split(",") : []
  })
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") ?? "")

  const handleMaxPrice = useDebouncedCallback((value: string) => {
    if (value) {
      params.set("maxPrice", value)
    } else {
      params.delete("maxPrice")
    }
    router.push(`${pathname}?${params.toString()}`)
  }, 500)

  const handleAmenities = (amenity: string, checked: boolean) => {
    console.log(amenity, checked)
    let updateAmenities: string[]

    if (checked) {
      updateAmenities = [...selectedAmenities, amenity]
    } else {
      updateAmenities = selectedAmenities.filter((item) => item !== amenity)
    }

    setSelectedAmenities(updateAmenities)

    if (updateAmenities.length > 0) {
      params.set("amenities", updateAmenities.join(","))
    } else {
      params.delete("amenities")
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  const handlePropertyCategory = (value: string) => {
    if (value !== "none") {
      params.set("type", value)
    } else {
      params.delete("type")
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  const handleReset = () => {
    setType("Select a type")
    setSelectedAmenities([])
    setMaxPrice("")
    router.push(pathname)
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
          onClick={handleReset}
          variant="ghost"
          size="sm"
          className="h-auto gap-1.5 p-0 text-xs font-semibold text-foreground transition-colors hover:text-destructive"
        >
          <RotateCcw className="h-3.5 w-3.5 text-destructive" />
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

      <div className="space-y-2">
        <Label
          htmlFor="maxPrice"
          className="text-xs font-semibold text-muted-foreground uppercase"
        >
          Enter Max Price
        </Label>

        <div className="relative flex items-center">
          <span className="absolute left-3 text-sm font-semibold text-muted-foreground select-none">
            ৳
          </span>

          <Input
            id="maxPrice"
            type="number"
            placeholder="e.g. 50000"
            value={maxPrice}
            onChange={(e) => {
              handleMaxPrice(e.target.value)
              setMaxPrice(e.target.value)
            }}
            className="pr-12 pl-8 text-sm font-medium"
            min={0}
            step={2000}
          />

          <span className="absolute right-3 text-xs text-muted-foreground select-none">
            / mo
          </span>
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
              <Checkbox
                className={"cursor-pointer"}
                checked={selectedAmenities.includes(amenity)}
                onCheckedChange={(checked) => {
                  handleAmenities(amenity, checked)
                }}
                id={`amenity-${amenity}`}
              />
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
