import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Home,
  Building,
  Key,
  ShieldCheck,
  Zap,
  Users,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export default function HomePage() {
  const categories = [
    { title: "Apartments", count: "120+ Listings", icon: Building },
    { title: "Single Family Home", count: "85+ Listings", icon: Home },
    { title: "Studio Flats", count: "45+ Listings", icon: Key },
    { title: "Luxury Villas", count: "30+ Listings", icon: Building },
  ]

  const features = [
    {
      title: "Verified Listings",
      description:
        "All properties and landlords are thoroughly verified for safe rentals.",
      icon: ShieldCheck,
    },
    {
      title: "Instant Booking",
      description:
        "Direct request system to connect with landlords without extra delay.",
      icon: Zap,
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden charges or unexpected agency fees. Pay what you see.",
      icon: Clock,
    },
    {
      title: "Dedicated Support",
      description:
        "24/7 assistance for tenants and landlords throughout the rental cycle.",
      icon: Users,
    },
  ]

  const whyChooseUs = [
    "Seamless digital agreement and request tracking",
    "Secure payment gateways and instant receipts",
    "Tailored property matching based on your lifestyle",
    "Direct communication channel between landlord and tenant",
  ]

  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="relative overflow-hidden border-b bg-linear-to-b from-emerald-100/60 via-background to-background py-16 md:py-24 dark:from-emerald-950/20 dark:via-background dark:to-background">
        {/* Background Pattern Grid (Light & Dark Compatible) */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />

        {/* Decorative Glow Effects */}
        <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-62.5 w-125 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/15" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-4 gap-1.5 border-emerald-200/80 bg-emerald-50/80 px-3 py-1 text-emerald-700 shadow-xs dark:border-emerald-800/60 dark:bg-emerald-950/50 dark:text-emerald-400"
          >
            <Home className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            Modern House Rental Platform
          </Badge>

          {/* Main Title */}
          <h1 className="max-w-3xl text-4xl leading-[1.15] font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Find Your Perfect Home with{" "}
            <span className="bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-300">
              RentNest
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Discover verified rental apartments, homes, and studios.
            Effortlessly apply, manage requests, and move in stress-free.
          </p>

          {/* Action Buttons (Using buttonVariants to fix Link nesting) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/properties"
              className={buttonVariants({
                size: "lg",
                className:
                  "gap-2 bg-emerald-600 font-semibold text-white shadow-md hover:bg-emerald-700 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400",
              })}
            >
              Explore Properties <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/signup"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "border-slate-300 bg-background/50 hover:bg-accent dark:border-slate-800 dark:bg-slate-900/50",
              })}
            >
              List Your Property
            </Link>
          </div>

          {/* Search Bar Component */}
          <div className="mt-10 w-full max-w-2xl rounded-2xl border border-slate-200/80 bg-card/80 p-2 shadow-xl shadow-slate-200/40 backdrop-blur-sm sm:p-3 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-2.5 rounded-xl bg-muted/60 px-3.5 py-2.5 text-muted-foreground transition-colors focus-within:bg-muted/90">
                <Search className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <input
                  type="text"
                  placeholder="Search by location, city, or area..."
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <Link
                href="/properties"
                className={buttonVariants({
                  className:
                    "w-full bg-emerald-600 font-semibold text-white hover:bg-emerald-700 sm:w-auto dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400",
                })}
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl space-y-20 px-4">
        {/* 2. CATEGORY TYPES SECTION */}
        <section className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Explore Property Categories
            </h2>
            <p className="text-sm text-muted-foreground">
              Browse rentals filtered by property architectural types.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {categories.map((cat, idx) => {
              const IconComponent = cat.icon
              return (
                <Card
                  key={idx}
                  className="group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">{cat.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {cat.count}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* 3. FEATURE SECTION */}
        <section className="space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Everything You Need To Rent Easily
            </h2>
            <p className="text-sm text-muted-foreground">
              Designed to make housing search, application, and lease management
              simple.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feat, idx) => {
              const Icon = feat.icon
              return (
                <div
                  key={idx}
                  className="space-y-3 rounded-xl border bg-card p-6"
                >
                  <div className="w-fit rounded-lg bg-secondary p-2.5 text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{feat.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feat.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* 4. WHY CHOOSE US SECTION */}
        <section className="rounded-2xl border bg-slate-50 p-8 sm:p-12 dark:bg-slate-900/50">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                Why RentNest
              </Badge>
              <h2 className="text-3xl leading-tight font-bold">
                Built For Both Tenants and Landlords
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                RentNest bridges the gap between property owners and renters
                with transparency, direct status updates, and automated
                tracking.
              </p>

              <ul className="space-y-3 pt-2">
                {whyChooseUs.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 rounded-xl border bg-background p-6 shadow-sm">
              <h3 className="border-b pb-3 text-base font-semibold">
                Quick Platform Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-xs text-muted-foreground">
                    Available Properties
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-primary">98%</p>
                  <p className="text-xs text-muted-foreground">
                    Successful Matches
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-primary">1,200+</p>
                  <p className="text-xs text-muted-foreground">
                    Active Tenants
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-xs text-muted-foreground">System Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION SECTION */}
        <section className="space-y-6 rounded-2xl bg-primary p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to find your new space?
          </h2>
          <p className="mx-auto max-w-xl text-sm opacity-90 sm:text-base">
            Sign up today to explore listings, save favorites, and send rental
            requests directly to property owners.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"

              className="font-semibold"
            >
              <Link href="/signup">Get Started Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"

              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/properties">Browse Properties</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
