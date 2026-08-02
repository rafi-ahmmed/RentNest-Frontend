import Link from "next/link"
import {
  Home,
  Building,
  Mail,
  Phone,
  MapPin,
  Heart,
  ShieldCheck,
  Headphones,
  CheckCircle,
} from "lucide-react"

function Footer() {
  return (
    <footer className="w-full border-t border-primary/10 bg-primary/3 text-foreground transition-colors">
      <div className="container mx-auto px-4 py-12 sm:px-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-14">
          {/* Column 1: Brand Info & Bio */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="group flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-xl font-bold text-primary-foreground shadow-sm">
                🏠
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Rent<span className="text-primary">Nest</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Find your dream home or list your property easily with RentNest.
              Your trusted platform for modern living and smooth rentals.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1.5 transition-colors hover:text-primary"
                >
                  <Home className="h-4 w-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="flex items-center gap-1.5 transition-colors hover:text-primary"
                >
                  <Building className="h-4 w-4" />
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="transition-colors hover:text-primary"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="transition-colors hover:text-primary"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase">
              Contact Us
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+880 1700-000000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>support@rentnest.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Why Choose Us / Value Highlights */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase">
              Why RentNest
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
                <span>Verified Listings</span>
              </li>
              <li className="flex items-center gap-2">
                <Headphones className="h-4 w-4 shrink-0 text-primary" />
                <span>24/7 Dedicated Support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                <span>Seamless Experience</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p className="flex items-center gap-1 text-center sm:text-left">
            © {new Date().getFullYear()} RentNest.
          </p>

          <div className="flex items-center gap-4">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
