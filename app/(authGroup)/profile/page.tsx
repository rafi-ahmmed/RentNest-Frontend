"use client";

import {
	ArrowLeft,
	Calendar,
	CheckCircle2,
	Clock,
	Edit3,
	KeyRound,
	Mail,
	ShieldAlert,
	User,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getMe } from "@/services/getme";


const userData = {
	id: "9c835968-a827-4cba-8ab6-f08f1a285be1",
	name: "kaif",
	email: "kaif@gmail.com",
	image: "https://i.ibb.co.com/yFmpBymN/icons8-firebase-144.png",
	role: "USER",
	status: "ACTIVE",
	createdAt: "2026-07-08T12:01:48.455Z",
	updatedAt: "2026-08-02T14:17:21.559Z",
};

export default  function ProfilePage() {
	const router = useRouter();

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return (
		<div className="container mx-auto min-h-[calc(100vh-4rem)] py-8 px-4 max-w-4xl">
			{/* Header Section */}
			<div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
				<div className="flex items-center gap-3">
					{/* Back Button */}
					<Button
						variant="outline"
						size="icon"
						onClick={() => router.back()}
						className="h-10 w-10 shrink-0 rounded-xl border-border bg-card hover:bg-accent text-foreground shadow-sm"
						title="Go Back"
					>
						<ArrowLeft className="w-5 h-5" />
					</Button>

					<div>
						<h1 className="text-3xl font-bold tracking-tight text-foreground">
							Account Profile
						</h1>
						<p className="text-sm text-muted-foreground mt-0.5">
							Manage your personal info, account settings, and activity status.
						</p>
					</div>
				</div>

				{/* <Button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm cursor-pointer">
               <Edit3 className="w-4 h-4" />
               Edit Profile
            </Button> */}
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				{/* Left Column: Avatar & Quick Info Card */}
				<div className="md:col-span-1 flex flex-col gap-6">
					<div className="p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm flex flex-col items-center text-center">
						<div className="relative w-28 h-28 mb-4">
							<Image
								src={userData.image}
								alt={userData.name}
								fill
								className="rounded-full object-cover border-4 border-secondary p-1 bg-background"
								unoptimized
							/>
							<span className="absolute bottom-1 right-1 p-1 bg-background rounded-full">
								<CheckCircle2 className="w-5 h-5 text-primary fill-primary/20" />
							</span>
						</div>

						<h2 className="text-xl font-bold capitalize text-foreground">
							{userData.name}
						</h2>
						<p className="text-sm text-muted-foreground mb-4">
							{userData.email}
						</p>

						{/* Badges */}
						<div className="flex flex-wrap gap-2 justify-center w-full">
							<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground border border-border">
								<User className="w-3 h-3" />
								{userData.role}
							</span>
							<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
								<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
								{userData.status}
							</span>
						</div>
					</div>
				</div>

				{/* Right Column: Detailed Overview Cards */}
				<div className="md:col-span-2 flex flex-col gap-6">
					{/* General Information */}
					<div className="p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
						<h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-3 flex items-center gap-2">
							<User className="w-5 h-5 text-primary" />
							General Details
						</h3>

						<div className="grid gap-4 sm:grid-cols-2">
							<div className="p-3.5 rounded-xl bg-muted/50 border border-border/50">
								<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
									Full Name
								</p>
								<p className="text-sm font-semibold text-foreground mt-1 capitalize">
									{userData.name}
								</p>
							</div>

							<div className="p-3.5 rounded-xl bg-muted/50 border border-border/50">
								<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
									Email Address
								</p>

								<p className="text-sm font-semibold text-foreground mt-1 flex items-center gap-1.5 truncate">
									<Mail className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
									{userData.email}
								</p>
							</div>

							<div className="p-3.5 rounded-xl bg-muted/50 border border-border/50">
								<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
									Role
								</p>
								<p className="text-sm font-semibold text-foreground mt-1">
									{userData.role}
								</p>
							</div>

							<div className="p-3.5 rounded-xl bg-muted/50 border border-border/50">
								<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
									Account Status
								</p>
								<p className="text-sm font-semibold text-primary mt-1">
									{userData.status}
								</p>
							</div>
						</div>
					</div>

					{/* Account Timestamps & ID */}
					<div className="p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
						<h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-3 flex items-center gap-2">
							<Clock className="w-5 h-5 text-primary" />
							System Meta
						</h3>

						<div className="flex flex-col gap-4">
							<div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-muted/50 border border-border/50 gap-2">
								<div className="flex items-center gap-2">
									<Calendar className="w-4 h-4 text-muted-foreground" />
									<span className="text-xs font-medium text-muted-foreground">
										Member Since
									</span>
								</div>
								<span className="text-sm font-semibold text-foreground">
									{formatDate(userData.createdAt)}
								</span>
							</div>

							<div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-muted/50 border border-border/50 gap-2">
								<div className="flex items-center gap-2">
									<Clock className="w-4 h-4 text-muted-foreground" />
									<span className="text-xs font-medium text-muted-foreground">
										Last Updated
									</span>
								</div>
								<span className="text-sm font-semibold text-foreground">
									{formatDate(userData.updatedAt)}
								</span>
							</div>

							<div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-muted/50 border border-border/50 gap-2">
								<div className="flex items-center gap-2">
									<KeyRound className="w-4 h-4 text-muted-foreground" />
									<span className="text-xs font-medium text-muted-foreground">
										User ID
									</span>
								</div>
								<span className="text-xs font-mono bg-background px-2 py-1 rounded border border-border text-muted-foreground">
									{userData.id}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
