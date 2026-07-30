import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  CheckCircle2,
  ArrowLeft,
  Share2,
  Heart,
  ShieldCheck,
  Star,
  MessageSquare,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getPropertyById } from "../../_actions/getPropertyById"

interface Review {
  rating: number
  comment: string
}

interface PropertyDetailsProps {
  params: Promise<{ id: string }>
}

const PropertyDetails = async ({ params }: PropertyDetailsProps) => {
  const { id } = await params

  const response = await getPropertyById(id)
  const property = response?.data

  if (!property) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold">Property Not Found</h2>
        <Button className="mt-4">
          <Link href="/properties">Back to Properties</Link>
        </Button>
      </div>
    )
  }

  const mainImage =
    property.images?.[0] ||
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa"
  const galleryImages = property.images?.slice(1) || []

  const reviews: Review[] = property.reviews || []
  const hasReviews = reviews.length > 0
  const avgRating = hasReviews
    ? (
        reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length
      ).toFixed(1)
    : 0

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto max-w-6xl space-y-8 px-4">
        {/* Navigation & Actions Bar */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <Link href="/properties" className="flex items-center gap-1 text-green-500 font-medium text-sm">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Properties</span>
            </Link>
          </Button>

          {/* <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Heart className="h-4 w-4" />
            </Button>
          </div> */}
        </div>

        {/* Image Gallery Grid */}
        <div className="grid h-87.5 grid-cols-1 gap-4 overflow-hidden rounded-2xl shadow-xs md:h-105 md:grid-cols-3">
          <div className="relative h-full bg-muted md:col-span-2">
            <Image
              src={mainImage}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="hidden h-full grid-rows-2 gap-4 md:grid">
            {galleryImages.length > 0 ? (
              galleryImages.map((img: string, idx: number) => (
                <div
                  key={idx}
                  className="relative h-full w-full overflow-hidden bg-muted"
                >
                  <Image
                    src={img}
                    alt={`${property.title} ${idx + 2}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))
            ) : (
              <div className="relative flex h-full w-full items-center justify-center bg-muted text-sm text-muted-foreground">
                No additional photos
              </div>
            )}
          </div>
        </div>

        {/* Main Details & Booking Sidebar */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="font-medium capitalize">
                  {property.category?.name || "Property"}
                </Badge>
                {property.iaAvailable ? (
                  <Badge className="bg-emerald-600 font-semibold text-white hover:bg-emerald-600">
                    Available
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="font-semibold">
                    Booked
                  </Badge>
                )}

                {/* Rating Badge */}
                {hasReviews && (
                  <div className="ml-auto flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-600 sm:ml-0">
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    <span>
                      {avgRating} ({reviews.length} reviews)
                    </span>
                  </div>
                )}
              </div>

              <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">
                {property.title}
              </h1>

              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>{property.address || property.location}</span>
              </div>
            </div>

            <Separator />

            {/* Key Specs */}
            <div className="grid grid-cols-3 gap-4 rounded-xl bg-muted/40 p-4 text-center">
              <div className="flex flex-col items-center justify-center gap-1">
                <Bed className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground">Bedrooms</span>
                <span className="text-sm font-bold">
                  {property.bedroom} Beds
                </span>
              </div>

              <div className="flex flex-col items-center justify-center gap-1 border-x border-border/60">
                <Bath className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground">Bathrooms</span>
                <span className="text-sm font-bold">
                  {property.bathroom} Baths
                </span>
              </div>

              <div className="flex flex-col items-center justify-center gap-1">
                <Maximize className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground">Area Size</span>
                <span className="text-sm font-bold">{property.size}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold">About this space</h3>
              <p className="text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
                {property.description}
              </p>
            </div>

            <Separator />

            {/* Amenities */}
            {property.amenities && property.amenities.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold">What this place offers</h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {property.amenities.map((amenity: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 rounded-lg border border-border/60 bg-background p-2.5 text-sm text-foreground/80"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span className="capitalize">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Separator />

            {/* ⭐️ REVIEWS SECTION */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold">Customer Reviews</h3>
                </div>

                {hasReviews && (
                  <div className="flex items-center gap-1 text-sm font-bold">
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    <span>{avgRating}</span>
                    <span className="font-normal text-muted-foreground">
                      ({reviews.length}{" "}
                      {reviews.length === 1 ? "review" : "reviews"})
                    </span>
                  </div>
                )}
              </div>

              {hasReviews ? (
                <div className="grid grid-cols-1 gap-4">
                  {reviews.map((review: Review, idx: number) => (
                    <Card
                      key={idx}
                      className="border-border/60 bg-muted/30 shadow-none"
                    >
                      <CardContent className="space-y-2 p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                              <User className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-semibold">User</span>
                          </div>

                          {/* Star Rating Render */}
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, starIdx) => (
                              <Star
                                key={starIdx}
                                className={`h-3.5 w-3.5 ${
                                  starIdx < review.rating
                                    ? "fill-amber-500 text-amber-500"
                                    : "fill-muted text-muted-foreground/30"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        <p className="text-xs leading-relaxed text-muted-foreground italic sm:text-sm">
                          {review.comment}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-center text-sm text-muted-foreground">
                  No reviews yet for this property.
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Price & Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border border-border/80 shadow-xs">
              <CardContent className="space-y-6 p-6">
                <div className="border-b border-border/60 pb-4">
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Rent Price
                  </span>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-primary">
                      ৳{Number(property.rent).toLocaleString()}
                    </span>
                    <span className="text-sm font-normal text-muted-foreground">
                      / month
                    </span>
                  </div>
                </div>

                {/* Landlord Contact Info */}
                {property.landlord?.email && (
                  <div className="space-y-1 rounded-lg border border-border/40 bg-muted/40 p-3 text-xs text-muted-foreground">
                    <span className="block font-semibold text-foreground">
                      Property Owner
                    </span>
                    <span className="block truncate">
                      {property.landlord.email}
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>
                    Verified listing with guaranteed availability & price
                    protection.
                  </span>
                </div>

                <Button
                  size="lg"
                  className="w-full font-bold shadow-xs"
                  disabled={!property.iaAvailable}
                >
                  {property.iaAvailable
                    ? "Request Booking"
                    : "Currently Booked"}
                </Button>

                <p className="text-center text-[11px] text-muted-foreground">
                  You won&apos;t be charged yet
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails
