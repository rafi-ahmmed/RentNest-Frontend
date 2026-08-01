"use client"

import React, { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button, buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Category, LandlordProperty } from "@/lib/types"
import { AVAILABLE_AMENITIES } from "../../_config/availableAmenities"
import { createProperty } from "../../_actions/landlordActions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export interface PropertyFormInput {
  title: string
  description: string
  rent: number
  size: string
  bedroom: number
  bathroom: number
  location: string
  address: string
  amenities: string[]
  images: string
  categoryId: string
}

export default function CreatePropertyForm({
  categories = [],
}: {
  categories: Category[]
}) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [selectedCategory, setSelectedCategory] = useState("")
  const [categoryError, setCategoryError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PropertyFormInput>()

  const handleFormSubmit = (data: PropertyFormInput) => {
    if (!selectedCategory) {
      setCategoryError("Please select a category")
      return
    }

    const payload: LandlordProperty = {
      ...data,
      categoryId: selectedCategory,
      rent: Number(data.rent),
      bedroom: Number(data.bedroom),
      bathroom: Number(data.bathroom),

      images: data.images
        ? data.images
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        : [],
    }

    startTransition(async () => {
      const data = await createProperty(payload)
      if (data.success) {
        toast.success("Property created successfully!")
        router.push("/landlord-dashboard")
      } else {
        toast.error("Failed to create property. Please try again.")
      }
    })
  }

  const selectedCategoryName = categories.find(
    (cat) => cat.id === selectedCategory
  )?.name

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-4 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 sm:p-6 dark:border-slate-800 dark:bg-slate-900/50"
    >
      <div className="space-y-4">
        {/* Title + Category */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="space-y-1 md:col-span-2">
            <Label htmlFor="title" className="text-xs font-semibold">
              Title <span className="text-red-500">*</span>
            </Label>

            <Input
              id="title"
              {...register("title", {
                required: "Title is required",
                minLength: { value: 5, message: "Min 5 characters required" },
              })}
              placeholder="e.g. Modern 2 BHK Apartment"
              className="bg-background text-xs"
            />
            {errors.title && (
              <p className="text-[11px] font-medium text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Category Select */}
          <div className="relative z-20 space-y-1">
            <Label htmlFor="category" className="text-xs font-semibold">
              Category <span className="text-red-500">*</span>
            </Label>

            <Select
              value={selectedCategory}
              onValueChange={(value) => {
                setSelectedCategory(value as string)
                setCategoryError("")
              }}
            >
              <SelectTrigger className="w-full bg-background text-xs">
                <SelectValue placeholder="Select category">
                  {selectedCategoryName ?? "Select category"}
                </SelectValue>
              </SelectTrigger>

              <SelectContent className="z-50 bg-popover">
                {categories.map((cat) => (
                  <SelectItem
                    key={cat.id}
                    value={cat.id}
                    className="text-xs capitalize"
                  >
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {categoryError && (
              <p className="text-[11px] font-medium text-red-500">
                {categoryError}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-1">
          <Label htmlFor="description" className="text-xs font-semibold">
            Description <span className="text-red-500">*</span>
          </Label>

          <Textarea
            id="description"
            rows={3}
            placeholder="Write details..."
            className="resize-none bg-background text-xs"
            {...register("description", {
              required: "Description is required",
              minLength: { value: 10, message: "Min 10 characters required" },
            })}
          />
          {errors.description && (
            <p className="text-[11px] font-medium text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Rent, Size, Bedroom, Bathroom */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="space-y-1">
            <Label htmlFor="rent" className="text-xs font-semibold">
              Rent (৳) <span className="text-red-500">*</span>
            </Label>
            <Input
              id="rent"
              type="number"
              placeholder="20000"
              className="bg-background text-xs"
              {...register("rent", {
                required: "Rent is required",
                min: { value: 1, message: "Rent must be greater than 0" },
              })}
            />
            {errors.rent && (
              <p className="text-[11px] font-medium text-red-500">
                {errors.rent.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="size" className="text-xs font-semibold">
              Size <span className="text-red-500">*</span>
            </Label>
            <Input
              id="size"
              placeholder="600 sqft"
              type="text"
              className="bg-background text-xs"
              {...register("size", { required: "Size is required" })}
            />
            {errors.size && (
              <p className="text-[11px] font-medium text-red-500">
                {errors.size.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="bedroom" className="text-xs font-semibold">
              Bedrooms <span className="text-red-500">*</span>
            </Label>
            <Input
              id="bedroom"
              type="number"
              placeholder="2"
              className="bg-background text-xs"
              {...register("bedroom", { required: "Required" })}
            />
            {errors.bedroom && (
              <p className="text-[11px] font-medium text-red-500">
                {errors.bedroom.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="bathroom" className="text-xs font-semibold">
              Bathrooms <span className="text-red-500">*</span>
            </Label>
            <Input
              id="bathroom"
              type="number"
              placeholder="1"
              className="bg-background text-xs"
              {...register("bathroom", { required: "Required" })}
            />
            {errors.bathroom && (
              <p className="text-[11px] font-medium text-red-500">
                {errors.bathroom.message}
              </p>
            )}
          </div>
        </div>

        {/* Location & Address */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="space-y-1">
            <Label htmlFor="location" className="text-xs font-semibold">
              Location / City <span className="text-red-500">*</span>
            </Label>
            <Input
              id="location"
              placeholder="e.g. Dhaka"
              className="bg-background text-xs"
              {...register("location", { required: "Location is required" })}
            />
            {errors.location && (
              <p className="text-[11px] font-medium text-red-500">
                {errors.location.message}
              </p>
            )}
          </div>

          <div className="space-y-1 sm:col-span-2">
            <Label htmlFor="address" className="text-xs font-semibold">
              Full Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="address"
              placeholder="e.g. House 12, Road 5, Mirpur"
              className="bg-background text-xs"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <p className="text-[11px] font-medium text-red-500">
                {errors.address.message}
              </p>
            )}
          </div>
        </div>

        {/* Amenities */}
        <div className="space-y-2">
          <Label className="text-xs font-semibold">
            Amenities <span className="text-red-500">*</span>
          </Label>

          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
            {AVAILABLE_AMENITIES.map((amenity) => (
              <label
                key={amenity}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-input bg-background p-2.5 transition-colors hover:bg-accent"
              >
                <input
                  type="checkbox"
                  value={amenity}
                  className="h-4 w-4 rounded border-gray-300 accent-primary"
                  {...register("amenities", {
                    required: "Select at least one amenity",
                  })}
                />
                <span className="text-xs font-medium">{amenity}</span>
              </label>
            ))}
          </div>
          {errors.amenities && (
            <p className="text-[11px] font-medium text-red-500">
              {errors.amenities.message}
            </p>
          )}
        </div>

        {/* Images */}
        <div className="space-y-1">
          <Label htmlFor="images" className="text-xs font-semibold">
            Image URLs{" "}
            <span className="font-normal text-muted-foreground">
              (comma separated)
            </span>
          </Label>
          <Textarea
            id="images"
            rows={2}
            placeholder="https://img1.jpg, https://img2.jpg"
            className="resize-none bg-background text-xs"
            {...register("images")}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-3">
        <Link
          href="/landlord-dashboard"
          className={buttonVariants({
            variant: "outline",
          })}
        >
          Cancel
        </Link>

        <Button type="submit">
          {isPending ? "Processing" : "Submit Data"}
        </Button>
      </div>
    </form>
  )
}
