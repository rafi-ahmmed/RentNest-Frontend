import React from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Bed, Bath, Maximize } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export interface Property {
  id: string
  title: string
  description: string
  rent: string
  size: string
  bedroom: number
  bathroom: number
  location: string
  address: string
  amenities: string[]
  images: string[]
  iaAvailable: boolean
  category: {
    name: string
  }
  landlord: {
    email: string
  }
}

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const fallbackImage =
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  const mainImage =
    property.images && property.images.length > 0
      ? property.images[0]
      : fallbackImage

  return (
    <Card className="group flex flex-col justify-between overflow-hidden border border-border/60 bg-card p-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
      {/* 🖼️ Image Section */}
      <div className="relative h-52 w-full overflow-hidden bg-muted">
        <Image
          src={mainImage}
          alt={property.title || "Property Image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={false}
          loading="eager"
        />

        {/* Gradient Overlay for better text contrast */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />

        {/* Category Badge on Image Top-Left */}
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 bg-background/80 font-medium text-foreground capitalize shadow-sm backdrop-blur-md"
        >
          {property.category?.name || "Property"}
        </Badge>

        {/* Location Tag on Image Bottom */}
        <div className="absolute right-3 bottom-3 left-3 flex items-center gap-1.5 text-xs text-white/90">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-green-400 drop-shadow" />
          <span className="truncate drop-shadow-sm">
            {property.address || property.location}
          </span>
        </div>
      </div>

      <CardHeader className="p-4 pb-2">
        <div className="flex items-center justify-between gap-2">
          {/* Title on Left */}
          <h3 className="line-clamp-1 text-base font-bold text-foreground transition-colors group-hover:text-primary">
            {property.title}
          </h3>

          {property.iaAvailable ? (
            <Badge className="shrink-0 bg-emerald-600/90 font-semibold text-white shadow-xs hover:bg-emerald-600">
              Available
            </Badge>
          ) : (
            <Badge
              variant="destructive"
              className="shrink-0 bg-red-500 font-semibold text-white shadow-xs"
            >
              Booked
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-3 p-4 pt-0">
        {/* Specs (Bed, Bath, Size) */}
        <div className="grid grid-cols-3 gap-2 rounded-lg bg-muted/50 p-2.5 text-center text-xs text-muted-foreground">
          <div className="flex items-center justify-center gap-1">
            <Bed className="h-3.5 w-3.5 text-primary" />
            <span className="font-medium text-foreground">
              {property.bedroom} Beds
            </span>
          </div>
          <div className="flex items-center justify-center gap-1 border-x border-border/60">
            <Bath className="h-3.5 w-3.5 text-primary" />
            <span className="font-medium text-foreground">
              {property.bathroom} Baths
            </span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <Maximize className="h-3.5 w-3.5 text-primary" />
            <span className="font-medium text-foreground">{property.size}</span>
          </div>
        </div>

        {/* Amenities Badges */}
        {property.amenities && property.amenities.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {property.amenities.map((amenity, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-border/80 bg-background/50 px-2 py-1 text-[12px] font-normal capitalize"
              >
                {amenity}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      {/* 💳 Footer: Price & Details Link */}
      <CardFooter className="mt-auto flex items-center justify-between border-t border-border/50 bg-muted/20 p-4 pt-3">
        <div>
          <span className="block text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
            Rent
          </span>
          <span className="text-lg leading-tight font-extrabold text-primary">
            ৳{Number(property.rent).toLocaleString()}
            <span className="text-xs font-normal text-muted-foreground">
              /mo
            </span>
          </span>
        </div>

        <Button size="sm" className="font-semibold shadow-sm">
          <Link href={`/properties/${property.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
