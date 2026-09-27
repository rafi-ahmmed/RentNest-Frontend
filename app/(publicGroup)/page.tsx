import {
	ArrowRight,
	Building,
	Building2,
	CheckCircle2,
	ChevronRight,
	Compass,
	Heart,
	HelpCircle,
	Home,
	Key,
	MapPin,
	Quote,
	Search,
	ShieldCheck,
	Sparkles,
	Star,
	TrendingUp,
	UserCheck,
	Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
	// Categories Data
	const categories = [
		{
			title: "Apartments",
			count: "120+ Listings",
			icon: Building,
			desc: "Modern living spaces",
		},
		{
			title: "Single Family Home",
			count: "85+ Listings",
			icon: Home,
			desc: "Spacious & comfortable",
		},
		{
			title: "Studio Flats",
			count: "45+ Listings",
			icon: Key,
			desc: "Compact & affordable",
		},
		{
			title: "Luxury Villas",
			count: "30+ Listings",
			icon: Building2,
			desc: "Premium amenities",
		},
	];

	const whyChooseUs = [
		"Seamless digital agreement and request tracking",
		"Secure payment gateways and instant receipts",
		"Tailored property matching based on your lifestyle",
		"Direct communication channel between landlord and tenant",
	];

	// Featured Properties Data
	const featuredProperties = [
		{
			id: "0e315ce4-6d82-40c3-8f5e-202f7319a105",
			title: "Modern Minimalist Apartment",
			location: "Gulshan 2, Dhaka",
			price: "৳ 35,000",
			beds: 3,
			baths: 2,
			rating: 4.9,
			image:
				"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
			tag: "Featured",
		},
		{
			id: "489fb195-a2e3-4302-b3ac-044ca1bdb8e1",
			title: "Luxury Duplex Villa",
			location: "Banani DOHS, Dhaka",
			price: "৳ 85,000",
			beds: 4,
			baths: 4,
			rating: 4.8,
			image:
				"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
			tag: "Verified",
		},
		{
			id: "6228bbf2-8c5a-42f2-9175-c4afb5e46643",
			title: "Cozy Studio Flat for Professionals",
			location: "Dhanmondi, Dhaka",
			price: "৳ 18,000",
			beds: 1,
			baths: 1,
			rating: 4.7,
			image:
				"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
			tag: "Popular",
		},
	];

	// How It Works Steps
	const steps = [
		{
			step: "01",
			title: "Search & Filter",
			desc: "Browse hundreds of verified properties filtered by location, budget, and amenities.",
			icon: Search,
		},
		{
			step: "02",
			title: "Schedule Visit / Apply",
			desc: "Send direct visit requests or rental applications to property owners effortlessly.",
			icon: Compass,
		},
		{
			step: "03",
			title: "Digital Agreement",
			desc: "Sign transparent digital agreements and complete secure payments online.",
			icon: Key,
		},
		{
			step: "04",
			title: "Move In Happy",
			desc: "Get your keys, track monthly rent receipts, and enjoy a hassle-free living experience.",
			icon: Home,
		},
	];

	// NEW SECTION replacing Features: Dual Platform Benefits
	const platformBenefits = [
		{
			title: "For Tenants",
			desc: "Find verified properties directly without middleman hassle or unexpected broker fees.",
			icon: UserCheck,
			highlights: [
				"0% Brokerage Charges",
				"Direct Owner Chat",
				"Online Lease Agreement",
			],
		},
		{
			title: "For Landlords",
			desc: "List your property in minutes and manage verified tenant requests seamlessly.",
			icon: ShieldCheck,
			highlights: [
				"Verified Renters",
				"Automated Rent Tracking",
				"Maximum Exposure",
			],
		},
	];

	// Popular Locations
	const locations = [
		{
			name: "Gulshan",
			count: "140+ Properties",
			image:
				"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
		},
		{
			name: "Banani",
			count: "95+ Properties",
			image:
				"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
		},
		{
			name: "Dhanmondi",
			count: "110+ Properties",
			image:
				"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80",
		},
		{
			name: "Uttara",
			count: "180+ Properties",
			image:
				"https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=400&q=80",
		},
	];

	// Testimonials
	const testimonials = [
		{
			name: "Tanvir Ahmed",
			role: "Software Engineer (Tenant)",
			text: "RentNest made finding an apartment in Gulshan completely stress-free. Direct communication with the landlord without brokers saved me a lot of money!",
			avatar:
				"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
		},
		{
			name: "Nusrat Jahan",
			role: "Property Owner (Landlord)",
			text: "Listing my duplex on RentNest took less than 5 minutes. I got verified background requests from tenants within 48 hours. Outstanding platform!",
			avatar:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
		},
	];

	// FAQs
	const faqs = [
		{
			q: "Is there any broker fee when booking through RentNest?",
			a: "No! RentNest operates on a direct tenant-to-landlord model. What you see is what you pay.",
		},
		{
			q: "How are landlords and properties verified?",
			a: "Our team conducts physical utility checks, NID verification, and ownership document validation for listed homes.",
		},
		{
			q: "Can I manage monthly rent payments online?",
			a: "Yes! RentNest supports automated digital payment tracking with instant digital receipts.",
		},
	];

	return (
		<div className="flex flex-col gap-16 pb-16">
			{/* 1. HERO BANNER SECTION (UNCHANGED) */}
			<section className="relative overflow-hidden border-b bg-linear-to-b from-emerald-100/60 via-background to-background py-16 md:py-24 dark:from-emerald-950/20 dark:via-background dark:to-background">
				<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
				<div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-62.5 w-125 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/15" />

				<div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
					<Badge
						variant="secondary"
						className="mb-4 gap-1.5 border-emerald-200/80 bg-emerald-50/80 px-3 py-1 text-emerald-700 shadow-xs dark:border-emerald-800/60 dark:bg-emerald-950/50 dark:text-emerald-400"
					>
						<Home className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
						Modern House Rental Platform
					</Badge>

					<h1 className="max-w-3xl text-4xl leading-[1.15] font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
						Find Your Perfect Home with{" "}
						<span className="bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-300">
							RentNest
						</span>
					</h1>

					<p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
						Discover verified rental apartments, homes, and studios.
						Effortlessly apply, manage requests, and move in stress-free.
					</p>

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

			{/* MAIN CONTENT WRAPPER */}
			<div className="mx-auto w-full max-w-7xl space-y-24 px-4">
				{/* 2. CATEGORY TYPES SECTION */}
				<section className="space-y-8">
					<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
						<div>
							<Badge
								variant="outline"
								className="mb-2 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
							>
								Explore Architecture
							</Badge>
							<h2 className="text-2xl font-extrabold sm:text-3xl">
								Browse Property Categories
							</h2>
						</div>
						<Link
							href="/properties"
							className="flex items-center text-sm font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
						>
							View All Categories <ChevronRight className="h-4 w-4 ml-1" />
						</Link>
					</div>

					<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
						{categories.map((cat, idx) => {
							const IconComponent = cat.icon;
							return (
								<Card
									key={idx}
									className="group relative overflow-hidden border border-border/60 bg-card/50 p-1 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5"
								>
									<CardContent className="flex flex-col items-start p-6">
										<div className="mb-4 rounded-xl bg-emerald-500/10 p-3.5 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:text-emerald-400">
											<IconComponent className="h-6 w-6" />
										</div>
										<h3 className="font-bold text-lg text-foreground">
											{cat.title}
										</h3>
										<p className="text-xs text-muted-foreground mt-1">
											{cat.desc}
										</p>
										<Badge
											variant="secondary"
											className="mt-4 font-medium text-xs bg-muted"
										>
											{cat.count}
										</Badge>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</section>

				{/* 3. FEATURED LISTINGS GRID */}
				<section className="space-y-8">
					<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
						<div>
							<Badge
								variant="outline"
								className="mb-2 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
							>
								Handpicked Homes
							</Badge>
							<h2 className="text-2xl font-extrabold sm:text-3xl">
								Featured Rental Properties
							</h2>
						</div>
						<Link
							href="/properties"
							className="flex items-center text-sm font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
						>
							Browse All Properties <ChevronRight className="h-4 w-4 ml-1" />
						</Link>
					</div>

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{featuredProperties.map((prop) => (
							<div
								key={prop.id}
								className="group overflow-hidden rounded-2xl border border-border/80 bg-card transition-all hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none"
							>
								<div className="relative h-52 w-full overflow-hidden">
									<Image
										src={prop.image}
										alt={prop.title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute top-3 left-3">
										<Badge className="bg-emerald-600 text-white shadow-sm">
											{prop.tag}
										</Badge>
									</div>
									<Button
										variant="ghost"
										size="icon"
										className="absolute top-3 right-3 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-md hover:text-red-500"
									>
										<Heart className="h-4 w-4" />
									</Button>
								</div>
								<div className="p-5">
									<div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
										<span className="flex items-center gap-1">
											<MapPin className="h-3.5 w-3.5 text-emerald-600" />{" "}
											{prop.location}
										</span>
										<span className="flex items-center gap-1 font-semibold text-amber-500">
											<Star className="h-3.5 w-3.5 fill-amber-500" />{" "}
											{prop.rating}
										</span>
									</div>
									<h3 className="mt-2 text-base font-bold text-foreground line-clamp-1">
										{prop.title}
									</h3>
									<div className="mt-4 flex items-center justify-between border-t border-border pt-4">
										<div>
											<p className="text-xs text-muted-foreground">Rent</p>
											<p className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
												{prop.price}
												<span className="text-xs font-normal text-muted-foreground">
													/mo
												</span>
											</p>
										</div>
										<Link
											href={`/properties/${prop.id}`}
											className={buttonVariants({
												size: "sm",
												className:
													"bg-emerald-600 hover:bg-emerald-700 text-white font-medium",
											})}
										>
											Details
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* 4. HOW IT WORKS STEP-BY-STEP */}
				<section className="space-y-10 rounded-3xl border border-border/80 bg-muted/30 p-8 sm:p-12">
					<div className="space-y-2 text-center max-w-2xl mx-auto">
						<Badge
							variant="outline"
							className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
						>
							Simple Steps
						</Badge>
						<h2 className="text-2xl font-extrabold sm:text-3xl">
							How RentNest Works
						</h2>
						<p className="text-sm text-muted-foreground">
							Rent your next dream property in just 4 easy digital steps without
							any broker involvement.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{steps.map((item, idx) => {
							const Icon = item.icon;
							return (
								<div
									key={idx}
									className="relative flex flex-col items-start p-6 rounded-2xl bg-card border border-border/60 shadow-xs"
								>
									<span className="text-3xl font-black text-emerald-600/20 dark:text-emerald-400/20 mb-2">
										{item.step}
									</span>
									<div className="mb-4 rounded-xl bg-emerald-500/10 p-3 text-emerald-600 dark:text-emerald-400">
										<Icon className="h-5 w-5" />
									</div>
									<h3 className="font-bold text-base text-foreground">
										{item.title}
									</h3>
									<p className="mt-2 text-xs text-muted-foreground leading-relaxed">
										{item.desc}
									</p>
								</div>
							);
						})}
					</div>
				</section>

				{/* 5. NEW SECTION: DUAL USER BENEFIT CARDS (Replaced Feature Section) */}
				<section className="space-y-8">
					<div className="space-y-2 text-center max-w-2xl mx-auto">
						<Badge
							variant="outline"
							className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
						>
							Tailored For You
						</Badge>
						<h2 className="text-2xl font-extrabold sm:text-3xl">
							Designed For Both Renters and Owners
						</h2>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						{platformBenefits.map((benefit, idx) => {
							const Icon = benefit.icon;
							return (
								<div
									key={idx}
									className="rounded-3xl border border-border/80 bg-linear-to-br from-card via-card to-emerald-500/5 p-8 shadow-xs flex flex-col justify-between"
								>
									<div className="space-y-4">
										<div className="w-fit rounded-2xl bg-emerald-600 p-3.5 text-white shadow-md">
											<Icon className="h-6 w-6" />
										</div>
										<h3 className="text-2xl font-bold">{benefit.title}</h3>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{benefit.desc}
										</p>

										<div className="pt-2 space-y-2">
											{benefit.highlights.map((item, hIdx) => (
												<div
													key={hIdx}
													className="flex items-center gap-2 text-xs font-semibold text-foreground"
												>
													<CheckCircle2 className="h-4 w-4 text-emerald-600" />
													<span>{item}</span>
												</div>
											))}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</section>

				{/* 6. POPULAR LOCATIONS */}
				<section className="space-y-8">
					<div className="space-y-2 text-center max-w-2xl mx-auto">
						<Badge
							variant="outline"
							className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
						>
							Top Neighborhoods
						</Badge>
						<h2 className="text-2xl font-extrabold sm:text-3xl">
							Explore Popular Rental Areas
						</h2>
					</div>

					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
						{locations.map((loc, idx) => (
							<div
								key={idx}
								className="group relative h-48 overflow-hidden rounded-2xl cursor-pointer"
							>
								<Image
									src={loc.image}
									alt={loc.name}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
								<div className="absolute bottom-4 left-4 text-white">
									<h3 className="text-lg font-bold">{loc.name}</h3>
									<p className="text-xs opacity-80">{loc.count}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* 7. WHY CHOOSE US & METRICS */}
				<section className="rounded-3xl border border-border/80 bg-slate-50/80 p-8 sm:p-12 dark:bg-slate-900/40">
					<div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
						<div className="space-y-5">
							<Badge
								variant="outline"
								className="w-fit border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
							>
								Why RentNest
							</Badge>
							<h2 className="text-3xl leading-tight font-extrabold">
								Built For Both Tenants and Landlords
							</h2>
							<p className="text-sm leading-relaxed text-muted-foreground">
								RentNest bridges the gap between property owners and renters
								with transparency, direct status updates, and automated
								tracking.
							</p>

							<ul className="space-y-3 pt-2">
								{whyChooseUs.map((point, index) => (
									<li
										key={index}
										className="flex items-center gap-3 text-sm font-medium"
									>
										<CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
										<span>{point}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
							<h3 className="border-b border-border pb-3 text-base font-bold flex items-center gap-2">
								<TrendingUp className="h-4 w-4 text-emerald-600" /> Quick
								Platform Metrics
							</h3>
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-1 p-3 rounded-xl bg-muted/40">
									<p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
										500+
									</p>
									<p className="text-xs text-muted-foreground font-medium">
										Available Properties
									</p>
								</div>
								<div className="space-y-1 p-3 rounded-xl bg-muted/40">
									<p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
										98%
									</p>
									<p className="text-xs text-muted-foreground font-medium">
										Successful Matches
									</p>
								</div>
								<div className="space-y-1 p-3 rounded-xl bg-muted/40">
									<p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
										1,200+
									</p>
									<p className="text-xs text-muted-foreground font-medium">
										Active Tenants
									</p>
								</div>
								<div className="space-y-1 p-3 rounded-xl bg-muted/40">
									<p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
										24/7
									</p>
									<p className="text-xs text-muted-foreground font-medium">
										System Uptime
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 8. USER TESTIMONIALS */}
				<section className="space-y-8">
					<div className="space-y-2 text-center max-w-2xl mx-auto">
						<Badge
							variant="outline"
							className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
						>
							Community Feedback
						</Badge>
						<h2 className="text-2xl font-extrabold sm:text-3xl">
							Loved By Renters & Landlords
						</h2>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						{testimonials.map((item, idx) => (
							<div
								key={idx}
								className="relative rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between space-y-4"
							>
								<Quote className="absolute top-4 right-4 h-8 w-8 text-emerald-500/10" />
								<p className="text-sm leading-relaxed text-muted-foreground italic">
									&ldquo;{item.text}&rdquo;
								</p>
								<div className="flex items-center gap-3 border-t border-border pt-4">
									<div className="relative h-11 w-11 overflow-hidden rounded-full border border-emerald-500/40">
										<Image
											src={item.avatar}
											alt={item.name}
											fill
											className="object-cover"
										/>
									</div>
									<div>
										<h4 className="text-sm font-bold text-foreground">
											{item.name}
										</h4>
										<p className="text-xs text-muted-foreground">{item.role}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* 9. FREQUENTLY ASKED QUESTIONS */}
				<section className="space-y-8 max-w-3xl mx-auto w-full">
					<div className="space-y-2 text-center">
						<Badge
							variant="outline"
							className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
						>
							Got Questions?
						</Badge>
						<h2 className="text-2xl font-extrabold sm:text-3xl">
							Frequently Asked Questions
						</h2>
					</div>

					<div className="space-y-4">
						{faqs.map((faq, idx) => (
							<div
								key={idx}
								className="rounded-2xl border border-border/80 bg-card p-5 space-y-2"
							>
								<h3 className="font-bold text-base text-foreground flex items-center gap-2">
									<HelpCircle className="h-4 w-4 text-emerald-600 shrink-0" />{" "}
									{faq.q}
								</h3>
								<p className="text-xs text-muted-foreground pl-6 leading-relaxed">
									{faq.a}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* 10. CALL TO ACTION SECTION */}
				<section className="relative overflow-hidden rounded-3xl bg-linear-to-r from-emerald-700 to-teal-800 p-8 text-center text-white shadow-xl sm:p-12 dark:from-emerald-900 dark:to-teal-950">
					<div className="relative z-10 space-y-6 max-w-2xl mx-auto">
						<Badge className="bg-white/10 text-white hover:bg-white/20 border-white/20">
							<Sparkles className="h-3.5 w-3.5 mr-1" /> Start Today
						</Badge>
						<h2 className="text-3xl font-extrabold sm:text-4xl">
							Ready to find your new space?
						</h2>
						<p className="text-sm opacity-90 sm:text-base leading-relaxed">
							Sign up today to explore verified listings, save favorites, and
							send rental requests directly to property owners.
						</p>
						<div className="flex flex-wrap justify-center gap-4 pt-2">
							<Link
								href="/signup"
								className={buttonVariants({
									size: "lg",
									className:
										"bg-white font-bold text-slate-900 hover:bg-slate-100 shadow-md",
								})}
							>
								Get Started Now
							</Link>
							<Link
								href="/properties"
								className={buttonVariants({
									variant: "outline",
									size: "lg",
									className:
										"border-white/40 bg-transparent text-white hover:bg-white/10 font-semibold",
								})}
							>
								Browse Properties
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
